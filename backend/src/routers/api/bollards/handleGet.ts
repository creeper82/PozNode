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

        if ("bollards" in r) res.json(r.bollards);
        else res.json([]);
    }

    catch (e) {
        res.status(500).send(e);
    }
}