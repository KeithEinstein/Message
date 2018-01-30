const router = require("express").Router();
const contacts = require("../models/contacts.js");

const accountSid = "AC63270d9afa3216271fa93800491027a0";
const authToken = "e53e7238ca4701d1db2baba163e438fc";
var Twilio = require("twilio").Twilio;

var client = new Twilio(accountSid, authToken);
var service = client.chat.services("IS9664fdefec8a43cfa00d58640bbc4a1b");

router.get("/", contacts.allContacts, (req, res, next) => {
    console.log(res.locals.allContactsData);
    res.render("contacts", { contactsData: res.locals.allContactsData });
});

router.get("/new", (req, res, next) => {
    res.render("./new_contact");
});

router.post("/", contacts.create, (req, res, next) => {
    res.redirect("contacts");
});

router.get("/create_message", contacts.findById, (req, res, next) => {
    res.render("create_message", { contactData: res.locals.contactData });
});

router.get("/edit_contact", contacts.findById, (req, res, next) => {
    res.render("edit_contact", { contactData: res.locals.contactData });
});

router.put("/:contact={{id}}", contacts.update, (req, res, next) => {
    res.json(res.locals.updatedContactData);
});

router.delete("/delete", contacts.destroy, (req, res, next) => {
    res.redirect("/");
});

module.exports = router;
