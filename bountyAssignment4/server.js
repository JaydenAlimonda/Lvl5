const express = require("express");
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose');
// Middlewaretypes

app.use(express.json());

app.use(morgan('dev'))


//mongoose db
mongoose.connect('mongodb+srv://jaydenalimonda:2LHkqmu2G173JeiI@cluster1.pmmrdel.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));


// Routes


app.use("/api/bountyBoard", require("./routes/bountyRouter"));

app.listen(7000, () => {
    console.log("server running");
});
