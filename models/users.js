const db = require("../db/index.js");
const users = {};

const accountSid = "AC63270d9afa3216271fa93800491027a0";
const authToken = "e53e7238ca4701d1db2baba163e438fc";
var Twilio = require("twilio").Twilio;

var client = new Twilio(accountSid, authToken);
var service = client.chat.services("IS9664fdefec8a43cfa00d58640bbc4a1b");

// List all users

// service.users
//     .list()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// Create a user

// service.users
//     .create({
//         identity: "Bob"
//     })
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

// Retrieve a user

// service
//     .users("USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
//     .fetch()
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

// Update a user

// service
//     .users("USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
//     .update({
//         friendlyName: "Bob"
//     })
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

// // Delete a user

// service
//     .users("USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
//     .remove()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     });

module.exports = users;
