import { NextFunction, Request, Response } from "express";
import pekaApiInterface from "../../interfaces/implementation/PekaApiInterface";
import { MissingParameterError } from "../../../../types/node/errors";

export default async function handleGet(req: Request, res: Response, next: NextFunction) {
    try {
        const query = req.query.bollard_symbol;

        if (!query) {
            throw new MissingParameterError("Missing bollard_symbol parameter.");
        }

        const r = await pekaApiInterface.getDepartures(query.toString());
        res.json(r);
    } catch (e: any) {
        next(e);
    }
}