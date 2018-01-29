const db = require("../db/index.js");
const contacts = {};

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
    console.log(req.body.contact);
    const id = 5;
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
        .none("DELETE FROM contacts WHERE id = $1", [req.params.contactId])
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
            [req.body.name, req.body.phone_number]
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
