import { NextFunction, Request, Response } from "express";
import prismaClient from "../../../services/prisma/prismaClient";

export const logger = async (req: Request, _res: Response, next: NextFunction) => {
    await prismaClient.logEntry.create({
        data: {
            url: req.originalUrl
        }
    });

    next();
};