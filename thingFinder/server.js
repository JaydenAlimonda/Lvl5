const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/storeInventory", require("./routes/storeInventoryRouter"));

app.listen(7001, () => {
    console.log("server running");
});
