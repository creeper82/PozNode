import express from "express";

import serverRouter from "./routers/server/router";
import apiRouter from "./routers/api/router";
import { handle404 } from "./handle404";

const app = express();

const PORT = 3202;

app.use("/", serverRouter);
app.use("/api/", apiRouter);
app.use(handle404);

app.listen(PORT, () => {
    console.log("Backend server is running on port: " + PORT);
})