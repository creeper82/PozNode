import path from "path";
import fs from "fs";

export function getFileRaw(dir: string, filename: string) : string {
    const filePath = path.join(__dirname, "data", dir, filename);

    return fs.readFileSync(filePath, "utf-8");
}

export function getFileJson(dir: string, filename: string) : any {
    return JSON.parse(getFileRaw(dir, filename));
}