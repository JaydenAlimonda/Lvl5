const express = require("express");
const app = express();
const morgan = require('morgan')


// Middleware


app.use(express.json());

app.use(morgan('dev'))


// Routes


app.use("/api/bountyBoard", require("./routes/bountyRouter"));

app.listen(7000, () => {
    console.log("server running");
});
