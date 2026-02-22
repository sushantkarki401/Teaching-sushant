const express = require("express");
const dotenv = require ("dotenv");
const connectToDatabase = require("./db/db");
dotenv.config();

const app = express();

connectToDatabase();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)

});


app.get("/", (req, res) => {
    res.send("Sushant .. Backend is running")

});

