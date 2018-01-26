const router = require("express").Router();
const contacts = require("../models/contacts.js");

// router.get("/", beers.allBeers, (req, res, next) => {
//     res.render("beers", { beersData: res.locals.allBeersData });
// });

// router.get("/:beerId", beers.findById, (req, res, next) => {
//     res.render("beer", res.locals.beerData);
// });

// router.post("/", beers.create, (req, res, next) => {
//     res.json({ id: res.locals.newBeerId, body: req.body });
// });

// router.delete("/:beerId", beers.destroy, (req, res, next) => {
//     res.json({ id: req.params.beerId });
// });

// router.put("/:beerId", beers.update, (req, res, next) => {
//     res.json(res.locals.updatedBeerData);
// });

// router.get("/:beerId/edit", beers.findById, (req, res, next) => {
//     res.render("beer-edit", res.locals.beerData);
// });

module.exports = router;
