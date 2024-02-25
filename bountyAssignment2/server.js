const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/bountyBoard", require("./routes/bountyRouter"));

app.listen(7000, () => {
    console.log("server running");
});
