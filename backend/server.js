const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Contact form API
app.post("/contact", (req, res) => {
    const data = req.body;

    console.log("New contact message:");
    console.log(data);

    res.send("Message received successfully!");
});

// Start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});