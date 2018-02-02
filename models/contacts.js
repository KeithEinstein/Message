const db = require("../db/index.js");
const contacts = {};

const accountSid = "AC63270d9afa3216271fa93800491027a0";
const authToken = "e53e7238ca4701d1db2baba163e438fc";
var Twilio = require("twilio").Twilio;

var client = new Twilio(accountSid, authToken);
var service = client.chat.services("IS9664fdefec8a43cfa00d58640bbc4a1b");

contacts.allContacts = (req, res, next) => {
    db
        .manyOrNone("SELECT * FROM contacts")
        .then(data => {
            res.locals.allContactsData = data;
            next();
        })
        .catch(error => {
            console.log(
                "error encountered in contacts.allContacts. Error:",
                error
            );
            next(error);
        });
};

contacts.findById = (req, res, next) => {
    const id = Number(req.query.contact);
    db
        .one("SELECT * FROM contacts WHERE contacts.id = ${id}", { id: id })
        .then(data => {
            res.locals.contactData = data;
            next();
        })
        .catch(error => {
            console.log(
                "error encountered in contacts.findById. Error:",
                error
            );
            next(error);
        });
};

contacts.create = (req, res, next) => {
    client.validationRequests
        .create({
            friendlyName: req.body.name,
            phoneNumber: req.body.phone_number
        })
        .then(data => console.log(data.validationCode));
    db
        .one(
            "INSERT INTO contacts (name, phone_number) VALUES ($1, $2) RETURNING id;",
            [req.body.name, req.body.phone_number]
        )
        .then(data => {
            res.locals.newContactId = data.id;
            next();
        })
        .catch(error => {
            console.log("error encountered in contacts.create. Error:", error);
            next(error);
        });
};

contacts.destroy = (req, res, next) => {
    db
        .none("DELETE FROM contacts WHERE id = $1", [req.body.id])
        .then(() => {
            next();
        })
        .catch(error => {
            console.log("error encountered in contacts.destroy. error:", error);
            next(error);
        });
};

contacts.update = (req, res, next) => {
    db
        .one(
            "UPDATE contacts SET name = $1, phone_number = $2 WHERE id = $3 RETURNING *;",
            [req.body.name, req.body.phone_number, req.body.id]
        )
        .then(data => {
            res.locals.updatedContactData = data;
            next();
        })
        .catch(error => {
            console.log("error encountered in contacts.update. Error:", error);
            next(error);
        });
};

module.exports = contacts;
