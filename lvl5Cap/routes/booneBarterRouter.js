// booneBarterRouter.js
const express = require("express");
const booneBarterRouter = express.Router();
const booneBarterModel = require('../models/booneBarterModel.js')



booneBarterRouter.get("/", async (req, res, next)=> {
    try {
        const foundbooneBarter = await booneBarterModel.find()
        res.status(200).send(foundbooneBarter)
        
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


booneBarterRouter.get("/:id", async (req, res) => {
    try {
        const booneBarterId = req.params.id;
        const foundbooneBarter = await booneBarterModel.findById(booneBarterId);
        res.send(foundbooneBarter);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


booneBarterRouter.post("/", async (req, res, next) => {
    try {
        const newbooneBarter = new booneBarterModel(req.body)
        const savedbooneBarter = await newbooneBarter.save()
        res.status(201).send(savedbooneBarter)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

booneBarterRouter.delete("/:id", async (req, res, next) => {
    try {
        const deletedbooneBarter = await booneBarterModel.findByIdAndDelete(req.params.id);
        res.status(200).send(deletedbooneBarter);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

booneBarterRouter.put("/:id", async (req, res, next) => {
    try {
        const updatedbooneBarter = await booneBarterModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(updatedbooneBarter);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
module.exports = booneBarterRouter