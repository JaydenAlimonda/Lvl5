const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jaydenalimonda:2LHkqmu2G173JeiI@cluster1.pmmrdel.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));



// Middleware to parse JSON
app.use(express.json());


// Routes
app.use("/BooneBarter", require("./routes/booneBarterRouter.js"));

app.listen(7001, () => {
    console.log("server running");
});
