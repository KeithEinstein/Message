const router = require("express").Router();
const users = require("../models/users.js");

router.get("/login", (req, res) => {
    res.render("./login");
});

module.exports = router;
