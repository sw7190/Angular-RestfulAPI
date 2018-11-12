
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

module.exports = util;
