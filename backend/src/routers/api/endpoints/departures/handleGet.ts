import { Request, Response } from "express";
import pekaApiInterface from "../../interfaces/implementation/PekaApiInterface";
import { ResourceNotFoundError } from "../../../../types/node/errors";

export default async function handleGet(req: Request, res: Response) {
    const query = req.query.bollard_symbol;

    if (!query) {
        res.status(422).send("Missing parameter: bollard_symbol.");
        return;
    }

    try {
        const r = await pekaApiInterface.getDepartures(query.toString());
        res.json(r);
    }

    catch (e: any) {
        if (e instanceof ResourceNotFoundError) {
            res.status(404).send(e.message || "404 - Not Found");
        }
        else res.status(500).send(e.message || "Unrecognized error occured. No message provided.");
    }
}