import { convertLineStopsResponse } from "../../routes/api/interfaces/implementation/converters";
import { getFileJson } from "./helpers";

test.each([1, 2, 3])("lines response is converted properly", (fileNumber) => {
    const sample = getFileJson("line", `peka${fileNumber}.json`);
    const expected = getFileJson("line", `node${fileNumber}.json`);

    const actual = convertLineStopsResponse(sample);

    expect(actual).toEqual(expected);
});

test("lines response ignores extra properties", () => {
    const sample = getFileJson("line", "peka4.json");
    const expected = getFileJson("line", "node4.json");

    const actual = convertLineStopsResponse(sample);

    expect(actual).toEqual(expected);
});