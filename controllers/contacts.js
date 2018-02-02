const router = require("express").Router();
const contacts = require("../models/contacts.js");

router.get("/", contacts.allContacts, (req, res, next) => {
    console.log(res.locals.allContactsData);
    res.render("contacts", { contactsData: res.locals.allContactsData });
});

router.get("/new", (req, res, next) => {
    res.render("./new_contact");
});

router.post("/", contacts.create, contacts.allContacts, (req, res, next) => {
    res.render("contacts", { contactsData: res.locals.allContactsData });
});

router.get("/create_message", contacts.findById, (req, res, next) => {
    res.render("create_message", { contactData: res.locals.contactData });
});

router.get("/edit_contact", contacts.findById, (req, res, next) => {
    res.render("edit_contact", { contactData: res.locals.contactData });
});

router.put("/update", contacts.update, (req, res, next) => {
    // res.redirect("contacts", { contactsData: res.locals.allContactsData });
    res.json(res.locals.updatedContactData);
});

router.delete("/delete", contacts.destroy, (req, res, next) => {
    res.render("contacts");
});

module.exports = router;
