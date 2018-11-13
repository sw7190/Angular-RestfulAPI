const util = require("../util/util");
const express = require("express");
const router = express.Router();

const dbConn = require("../database/dbConn");
const conn = dbConn.init();

dbConn.open(conn);

router.post("/", util.isLogin, (req, res, next) => {
    const query = "INSERT INTO board SET member = ?, title = ?, content = ?, date = now()";
    const values = [req.decoded.idx, req.body.title, req.body.content];
    conn.query(query, values, (err) => {
        if(err){
            res.json(util.fail("실패"));
        }else{
            res.json(util.success(null,"성공"));
        }
    });
});

router.get("/", (req, res, next) => {
    const query = `SELECT b.idx, b.title, DATE_FORMAT(b.date,'%Y-%m-%d') as date, m.name FROM board b, user m WHERE b.member = m.idx ORDER BY b.idx DESC`;
    conn.query(query, (err, data) => {
        if(err){
            res.json(util.fail("실패"));
        } else {
            res.json(util.success(data));
        }
    });
});

router.get("/:idx", (req, res, next) => {
    const query = `SELECT * FROM board WHERE idx = ?`;
    conn.query(query, [req.param("idx")], (err, data) => {
        if(err) {
            res.json(util.fail("실패"))
        }else {
            res.json(util.success(data[0], "성공"));
        }
    });
});

router.delete("/:idx", (req, res, next) => {
    const query = "DELETE FROM board WHERE idx = ?";
    conn.query(query, [req.param("idx")], (err) => {
        if(err) {
            res.json(util.fail(err));
        }else {
            res.json(util.success(null, "성공"));
        }
    });
});

module.exports = router;