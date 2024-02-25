// inventoryRouter.js
const express = require("express");
const inventoryRouter = express.Router();
const inventoryModel = require('../models/inventoryModel.js')



inventoryRouter.get("/", async (req, res, next)=> {
    try {
        const foundinventory = await inventoryModel.find()
        res.status(200).send(foundinventory)
        
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


inventoryRouter.get("/:id", async (req, res) => {
    try {
        const inventoryId = req.params.id;
        const foundinventory = await inventoryModel.findById(inventoryId);
        res.send(foundinventory);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


inventoryRouter.post("/", async (req, res, next) => {
    try {
        const newinventory = new inventoryModel(req.body)
        const savedinventory = await newinventory.save()
        res.status(201).send(savedinventory)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

inventoryRouter.delete("/:id", async (req, res, next) => {
    try {
        const deletedinventory = await inventoryModel.findByIdAndDelete(req.params.id);
        res.status(200).send(deletedinventory);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

inventoryRouter.put("/:id", async (req, res, next) => {
    try {
        const updatedinventory = await inventoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(updatedinventory);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
module.exports = inventoryRouter