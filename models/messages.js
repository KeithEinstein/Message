const db = require("../db/index.js");
const messages = {};

const accountSid = "AC63270d9afa3216271fa93800491027a0";
const authToken = "e53e7238ca4701d1db2baba163e438fc";
var Twilio = require("twilio").Twilio;

var client = new Twilio(accountSid, authToken);
var service = client.chat.services("IS9664fdefec8a43cfa00d58640bbc4a1b");

// List all messages in channel

// Create new message in channel
messages.sendMessage = (req, res, next) => {
    client.messages
        .create({
            body: req.body.body,
            to: req.body.phone_number,
            from: "+19172596360"
        })
        .then(message => console.log(message.sid));
    // db
    //     .one(
    //         "INSERT INTO messages (body, user_id, contact_id) VALUES ($1, $2, $3) RETURNING id;",
    //         [req.body.body, req.body.user_id, req.body.contact_id]
    //     )
    //     .then(message => {
    //         res.locals.newMessageId = message.id;
    //         next();
    //     })
    //     .catch(error => {
    //         console.log("error encountered in contacts.create. Error:", error);
    //         next(error);
    //     });
};

// Retrieve a message

messages.retrieveMessage = (req, res, next) => {
    const id = req.params.messageId;
    db
        .one("SELECT * FROM messages WHERE message.id = ${id}", { id: id })
        .then(data => {
            res.locals.messageData = data;
            next();
        })
        .catch(error => {
            console.log(
                "error encountered in messages.findById. Error:",
                error
            );
            next(error);
        });
};

module.exports = messages;
