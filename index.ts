import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    console.log(username, password);

    res.json({
        success: true
    });
});

app.listen(3000, () => {
    console.log("Server running");
});