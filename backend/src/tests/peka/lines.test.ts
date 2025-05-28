import { convertLinesResponse } from "../../routes/api/interfaces/implementation/converters";
import { PekaGetLinesResponse } from "../../types/responses";
import { getFileJson } from "./helpers";

test.each([1, 2])("lines response is converted properly", (fileNumber) => {
    const sample = getFileJson("lines", `peka${fileNumber}.json`);
    const expected = getFileJson("lines", `node${fileNumber}.json`);

    const actual = convertLinesResponse(sample);

    expect(actual).toEqual(expected);
});

test("lines response ignores extra properties", () => {
    const sample = getFileJson("lines", "peka3.json");
    const expected = getFileJson("lines", "node3.json");

    const actual = convertLinesResponse(sample);

    expect(actual).toEqual(expected);
});

test("empty response handled correctly", () => {
    const empty: PekaGetLinesResponse = [];
    const actual = convertLinesResponse(empty);

    expect(actual).toEqual([]);
});