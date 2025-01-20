import { NextFunction, Request, Response } from "express";
import pekaApiInterface from "../../interfaces/implementation/PekaApiInterface";
import { MissingParameterError } from "../../../../types/node/errors";

export default async function handleGet(req: Request, res: Response, next: NextFunction) {
    try {
        const query = req.query.name;

        if (!query) {
            throw new MissingParameterError("Missing name parameter.");
        }

        const r = await pekaApiInterface.getBollards(query.toString());
        res.json(r);
    } catch (e: any) {
        next(e);
    }
}