const util = require("../util/util");
const express = require("express");
const bcrypt = require('bcrypt-nodejs');
const jwt = require("jsonwebtoken");
const router = express.Router();

const dbConn = require("../database/dbConn");
const conn = dbConn.init();

const JWT_KEY = "%SWJJANG%";

dbConn.open(conn);

//유저 목록
router.get("/", (req, res, next) => {
    const query = "SELECT * FROM user";
    conn.query(query, (err, data) => {
        if(err){
            return res.json(util.fail(err));
        }else{
            res.json(util.success(data));
        }
    })
});

//로그인
router.post("/login", (req, res, next) => {
    const query = "SELECT * FROM user WHERE userid = ?";
    conn.query(query, [req.body.userid], (err, data) => {
        if(!data[0]){
            return res.json(util.fail("비밀번호 또는 아이디가 없습니다."));
        }else{
            let pw = req.body.password;
            let flag = bcrypt.compareSync(pw, data[0].password);
            if(flag){
                const payload = { //token에 넣을 값
                    userid: data[0].userid,
                    username: data[0].name
                };
                jwt.sign(payload, JWT_KEY, {}, (err, token) => {
                    if(err) return res.json(util.fail(err));
                    res.json(util.success(token, "로그인 성공"));
                });
            }else{
                return res.json(util.fail("비밀번호 또는 아이디가 없습니다."));
            }
        }
    })
});

//회원가입
router.post("/", (req, res, next) => {
    let query = "SELECT * FROM user WHERE userid = ?";

    conn.query(query,[req.body.userid], (err, data) => {
        if(data[0]){
            console.log("Existing ID");
            return res.json(util.fail("이미 있는 아이디 입니다."));

        }else{
            let p = req.body;
            p.password = bcrypt.hashSync(p.password, bcrypt.genSaltSync(8));
            query = "INSERT INTO user (name, userid, password, phone) VALUES (?, ?, ?, ?)";
            conn.query(query, [p.name, p.userid, p.password, p.phone], (err) => {
                if(err){
                    console.log(err);
                    return res.json(util.fail("회원가입 실패"));

                }else{
                    console.log("Insert Success");
                    res.json(util.success(data,"회원가입 완료"));
                }

            });
        }
    });
});

module.exports = router;