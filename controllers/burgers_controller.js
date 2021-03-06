const orm = require("../config/orm");
const express = require("express");

const router = express.Router();

/* HTML Routes */
router.get("/", async function (req, res) {
  const data = await orm.selectAll();
  res.render("index", {
    burgers: data,
  });
});

/* API ROUTES */
router.post("/api/burgers", async function (req, res) {
  try {
    const burgerName = req.body.name; 
    await orm.insertOne(burgerName);
    res.status(201).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/api/burgers/:id", async function (req, res) {
  try {
    const updatedBurger = await orm.updateOne(req.body.colName, req.params.id);
    if (!updatedBurger) return res.status(404).end();
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;