var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get("/", (req, response) => {
    burgers.selectAll((res) => {
        console.log(res);
        response.render("index", {
            burgers: res
        });
    });
});

//Add a new burger
router.post("/burgers/create", (req, response) => {
    burgers.addOne(req.body.burger_name,(res) => {
        response.render("index", {
            burgers: res
        });
        response.redirect("/");
    });
});

//devour a burger
router.post("/burgers/devoured/:id", (req,response) => {
    burgers.devourOne(req.params.id, (res) => {
        response.render("index", {
            burgers:res
        });
        response.redirect("/");
    });
});



module.exports = router