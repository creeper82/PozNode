import express, { Request, Response } from "express";
import getStopPoints from "./getStopPoints";

const apiRouter = express.Router();

apiRouter.get("/stops", async (req, res) => {
    const query = req.query.q ?? "";

    try {
        const r = await getStopPoints(query.toString());

        if ("success" in r) {
            res.json(r.success);
        } else {
            res.status(500).send("Could not handle the request.");
        }
    }

    catch {
        res.status(500).send("Unexpected error occured.");
    }
});

export default apiRouter;