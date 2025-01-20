import { NextFunction, Request, Response } from "express";
import { ExternalServerError, MissingParameterError, ResourceNotFoundError } from "../../../types/node/errors";

export const errorHandler = (err: Error, _req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ResourceNotFoundError) {
        res.status(404).send(err.message || "404 - Not Found"); return;
    }

    if (err instanceof ExternalServerError) {
        res.status(500).send("External server error: " + err.message || "Unrecognized error occured. No message provided"); return;
    }

    if (err instanceof MissingParameterError) {
        res.status(422).send(err.message || "Missing parameters");
    }

    res.status(500).send("Internal server error: " + (err.message || "Unrecognized error occured. No message provided")); return;
};