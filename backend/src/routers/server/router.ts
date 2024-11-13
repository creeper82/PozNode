import express, { Request, Response } from "express";
import getServerStats from "./getServerStats"

const serverRouter = express.Router();

serverRouter.get("/serverstats", (_, res) => {
    res.json(getServerStats());
})

export default serverRouter;