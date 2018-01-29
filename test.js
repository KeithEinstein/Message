const accountSid = "AC63270d9afa3216271fa93800491027a0";
const authToken = "e53e7238ca4701d1db2baba163e438fc";
var Twilio = require("twilio").Twilio;

var client = new Twilio(accountSid, authToken);
var service = client.chat.services("IS9664fdefec8a43cfa00d58640bbc4a1b");

client.messages
    .create({
        body: "Yo!",
        to: "+16314337404",
        from: "+19172596360",
        mediaUrl: "http://www.example.com/cheeseburger.png"
    })
    .then(message => console.log(message.sid));
