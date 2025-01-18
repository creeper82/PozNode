import { Request, Response } from "express";
import getStopPoints from "./getStopPoints";

export default async function handleGet(req: Request, res: Response) {
    const query = req.query.q ?? "";

    try {
        const r = await getStopPoints(query.toString());
        res.json(r);
    }

    catch {
        res.status(500).send("The request failed on the server side.");
    }
}