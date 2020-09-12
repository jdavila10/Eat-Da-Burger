const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },    

    addOne: function(burger_name, cb) {
        orm.addOne(burger_name, function(res) {
        cb(res);
      });
    },

    devourOne: function(cols, condition, cb) {
      orm.devourOne(cols, condition, function(res) {
        cb(res);
      });
    },
  };

// Export the database functions for the controller.js
module.exports = burger;

