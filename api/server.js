import express from "express";
import cors from "cors";
import { Heroes } from "./data/heroes.js";

const PORT_NUMBER = 5001;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.json(Heroes)
});

let corsOptions = {
    origin: 'http://localhost:3000'
};

app.get('/heroes', cors(corsOptions), function (req, res) {
    const { q } = req.query;

    const keys = ["localized_name"];

    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };

    // Sort localized_name A-Z
    const heroes = [...Heroes].sort((a, b) =>
        a.localized_name > b.localized_name ? 1 : -1,
    );

    q ? res.json(search(heroes)) : res.json(heroes);
});

app.listen(PORT_NUMBER, () => console.log('Api server running at port: ' + PORT_NUMBER));