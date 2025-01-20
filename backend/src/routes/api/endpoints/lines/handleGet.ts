import { NextFunction, Request, Response } from "express";
import pekaApiInterface from "../../interfaces/implementation/PekaApiInterface";

export default async function handleGet(req: Request, res: Response, next: NextFunction) {
    try {
        const query = req.query.q ?? "";
        const r = await pekaApiInterface.getLines(query.toString());

        res.json(r);
    } catch (e: any) {
        next(e);
    }
}