const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});