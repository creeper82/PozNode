import express from "express";
import cors from "cors";

import serverRouter from "./routes/stats/router";
import apiRouter from "./routes/api/router";
import { handle404 } from "./handle404";
import { VALUES } from "./values";
import { rateLimit } from "express-rate-limit";

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(rateLimit({
    windowMs: 10 * 1000, // 10 seconds
    limit: 20
}));

app.use("/", serverRouter);
app.use("/api/", apiRouter);
app.use(handle404);

app.listen(Number(VALUES.PORT), VALUES.HOST, 511, () => {
    console.log("Backend server is running on http://" + VALUES.HOST + ":" + VALUES.PORT);
});