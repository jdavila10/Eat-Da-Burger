const connection = require("./connection.js");

const orm = {
    selectAll: (tableName, cb) => {
        let queryString = "SELECT * FROM ??;";
        connection.query(queryString, tableName, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    addOne: (burger_name, cb) => {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?);";
        console.log(burger_name);
        connection.query(queryString, [burger_name, false], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    devourOne: (id, cb) => {
        let queryString = "UPDATE burgers SET devoured = ? WHERE id = ?;";
        connection.query(queryString, [true, id], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;