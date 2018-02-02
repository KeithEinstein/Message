const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const twilio = require("twilio");
const app = express();
const PORT = process.env.PORT || 3000;

const dotenv = require("dotenv").config();

const AUTH_TOKEN = process.env.AUTH_TOKEN;
const ACCOUNT_SID = process.env.ACCOUNT_SID;
const SERVICES = process.env.SERVICES;

const mustacheExpress = require("mustache-express");

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log("Server started on " + PORT);
});

const usersRouter = require("./controllers/users.js");
app.use("/users", usersRouter);

const contactsRouter = require("./controllers/contacts.js");
app.use("/contacts", contactsRouter);

const messagesRouter = require("./controllers/messages.js");
app.use("/messages", messagesRouter);

app.use((err, req, res, next) => {
    console.log("Error encountered:", err);
    res.status(500);
    res.send(err);
});
