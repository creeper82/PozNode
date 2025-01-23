import express from "express";
import cors from "cors";

import serverRouter from "./routes/stats/router";
import apiRouter from "./routes/api/router";
import { handle404 } from "./handle404";
import { VALUES } from "./values";

const app = express();

app.use(cors({
    origin: "http://localhost:*"
}));

app.use("/", serverRouter);
app.use("/api/", apiRouter);
app.use(handle404);

app.listen(Number(VALUES.PORT), VALUES.HOST, 511, () => {
    console.log("Backend server is running on http://" + VALUES.HOST + ":" + VALUES.PORT);
});