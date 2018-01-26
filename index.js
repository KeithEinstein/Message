const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const twilio = require("twilio");
const app = express();
const port = process.env.PORT || 3000;

const mustacheExpress = require("mustache-express");

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log("Server started on " + port);
});

const contactsRouter = require("./controllers/contacts.js");
app.use("/contacts", contactsRouter);

const messagesRouter = require("./controllers/messages.js");
app.use("/messages", messagesRouter);

const conversationRouter = require("./controllers/conversation.js");
app.use("/conversation", conversationRouter);

app.use((err, req, res, next) => {
    console.log("Error encountered:", err);
    res.status(500);
    res.send(err);
});
