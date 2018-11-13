const jwt = require("jsonwebtoken");
const JWT_KEY = "%SWJJANG%";
let util = {};

util.success = (data, msg = null) => {
    return {
        success: true,
        msg: msg ? msg : null,
        data: data
    }
}

util.fail = (msg) =>{
    return {
        success: false,
        msg: msg,
        data: null
    }
}

util.isLogin = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.json(util.fail('token이 없습니다.'));
    else {
        jwt.verify(token, JWT_KEY, (err, decoded) => {
            if(err) return res.json(util.fail(err));
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
}

module.exports = util;
