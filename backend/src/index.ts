import express from "express";

import serverRouter from "./routers/server/router";
import apiRouter from "./routers/api/router";

const app = express();

const PORT = 3202;

app.use("/", serverRouter);
app.use("/api/", apiRouter);

app.listen(PORT, () => {
    console.log("Backend server is running on port: " + PORT);
})