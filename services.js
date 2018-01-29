const accountSid = "AC63270d9afa3216271fa93800491027a0";
const authToken = "e53e7238ca4701d1db2baba163e438fc";
const Twilio = require("twilio").Twilio;

const client = new Twilio(accountSid, authToken);

client.chat.services
    .create({
        friendlyName: "chat"
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
