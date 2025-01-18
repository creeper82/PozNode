import { Request, Response } from "express";
import getStopPoints from "./getStopPoints";

export default async function handleGet(req: Request, res: Response) {
    const query = req.query.q ?? "";

    try {
        const r = await getStopPoints(query.toString());
        res.json(r);
    }

    catch (e: any) {
        res.status(500).send(e.message || "Unrecognized error occured. No message provided.");
    }
}