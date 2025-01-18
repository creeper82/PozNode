import { Request, Response } from "express";
import getDepartures from "./getDepartures";

function convertTimestamp(fullTimestamp: string): string {
    return fullTimestamp.slice(fullTimestamp.indexOf("T") + 1, fullTimestamp.indexOf(":00"));
}

export default async function handleGet(req: Request, res: Response) {
    const query = req.query.bollard_symbol;

    if (!query) {
        res.status(422).send("Missing parameter: bollard_symbol.");
        return;
    }

    try {
        const r = await getDepartures(query.toString());

        r.times.forEach(time => {
            time.departure = convertTimestamp(time.departure);
        });

        res.json({
            bollardName: r.bollard.name,
            bollardSymbol: r.bollard.symbol,
            departures: r.times
        });
    }

    catch (e: any) {
        res.status(500).send(e.message || "Unrecognized error occured. No message provided.");
    }
}