import express from "express";
import cors from "cors";
import { Heroes } from "./data/heroes.js";

const PORT_NUMBER = 5001;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.json(Heroes)
});

app.listen(PORT_NUMBER, () => console.log('Api server running at port: ' + PORT_NUMBER));