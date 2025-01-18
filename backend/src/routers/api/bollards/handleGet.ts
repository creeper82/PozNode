import { Request, Response } from "express";
import getBollards from "./getBollards";

export default async function handleGet(req: Request, res: Response) {
    const query = req.query.name;

    if (!query) {
        res.status(422).send("Missing parameter: name.");
        return;
    }

    try {
        const r = await getBollards(query.toString());

        if ("bollards" in r) {
            res.json(r.bollards.map(entry => ({
                name: entry.bollard.name,
                // There is some mistake in the API - symbol and tag seems to be swapped?
                symbol: entry.bollard.tag,
                directions: entry.directions
            })));
        }
        else res.json([]);
    }

    catch (e: any) {
        res.status(500).send(e.message || "Unrecognized error occured.No message provided.");
    }
}