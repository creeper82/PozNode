import express from "express";
import getServerStats from "./getServerStats"

const serverRouter = express.Router();

serverRouter.get("/", (_, res) => {
    res.send("PozNode backend server v1.0.0 - powered by Node.js")
})

serverRouter.get("/stats", (_, res) => {
    res.json(getServerStats());
})

export default serverRouter;