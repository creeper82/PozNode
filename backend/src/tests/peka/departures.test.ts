import { convertDeparturesResponse } from "../../routes/api/interfaces/implementation/converters";
import { getFileJson } from "./helpers";

test.each([1, 2, 3, 4])("departures response is converted properly", (fileNumber) => {
    const sample = getFileJson("departures", `peka${fileNumber}.json`);
    const expected = getFileJson("departures", `node${fileNumber}.json`);

    const actual = convertDeparturesResponse(sample);

    expect(actual).toEqual(expected);
});

test("departures response ignores extra properties", () => {
    const sample = getFileJson("departures", "peka4.json");
    const expected = getFileJson("departures", "node4.json");

    const actual = convertDeparturesResponse(sample);

    expect(actual).toEqual(expected);
});