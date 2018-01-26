const pgp = require("pg-promise")();

const cn = {
    host: "localhost",
    port: 5432,
    database: "project_two",
    user: "keitheinstein"
};

const db = pgp(cn);

module.exports = db;
