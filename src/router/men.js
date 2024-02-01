const express = require("express");
const router = new express.Router();
const MenRanking = require("../models/mens");

//To check app is working or not
router.get("/", (req, res) => {
  res.send("welcome world");
});

//To post mens data to db

router.post("/mens", async (req, res) => {
  try {
    const addingMensRecord = new MenRanking(req.body);
    console.log(addingMensRecord);
    const insertMens = await addingMensRecord.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

//To read data from db

router.get("/mens", async (req, res) => {
  try {
    const readingMens = await MenRanking.find();
    res.status(201).send(readingMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

//To read specific data from db

router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const readingMens = await MenRanking.findById(_id);
    res.status(201).send(readingMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

//To update specific data from db

router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const readingMens = await MenRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).send(readingMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

//To delete specific data from db

router.delete("/mens/:id", async (req, res) => {
  try {
    const readingMens = await MenRanking.findByIdAndDelete(req.params.id);
    res.status(201).send(readingMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
