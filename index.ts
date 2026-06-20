import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    console.log(username, password);

    res.json({
        success: true,
    });
});

app.get("/health", (req, res) => {
    res.json({
        success: true,
        uptime: process.uptime(),
        timestamp: Date.now(),
    });
});

app.listen(3000, () => {
    console.log("Server running");
});
