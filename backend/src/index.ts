import express, { Request, Response } from "express";

import serverRouter from "./routers/server/router";

const app = express();

const PORT = 3202;

app.use("/", serverRouter);

app.listen(PORT, () => {
    console.log("Backend server is running on port: " + PORT);
})