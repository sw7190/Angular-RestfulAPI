const mysql = require("mysql");
const dbInfo = require("./dbInfo");

class DB {
    init() {
        return mysql.createConnection(dbInfo);
    }

    open(connection) {
        connection.connect( err => {
            if(err)
                console.log("mysql Error : " + err);
            else
                console.log("mysql connected");
        })
    }
}

module.exports = new DB();