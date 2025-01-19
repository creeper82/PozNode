import { Request, Response } from "express";

export const handle404 = (_req: Request, res: Response) => {
    res.status(404).send("<h1>URL not found</h1>");
};