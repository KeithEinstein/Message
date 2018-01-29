const router = require("express").Router();
const messages = require("../models/messages.js");

const accountSid = "AC63270d9afa3216271fa93800491027a0";
const authToken = "e53e7238ca4701d1db2baba163e438fc";
var Twilio = require("twilio").Twilio;

var client = new Twilio(accountSid, authToken);
var service = client.chat.services("IS9664fdefec8a43cfa00d58640bbc4a1b");

router.post("/", messages.sendMessage, (req, res, next) => {
    res.json({ id: res.locals.newMessageId, body: req.body });
});

module.exports = router;
