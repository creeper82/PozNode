import { convertBollardsResponse } from "../../routes/api/interfaces/implementation/converters";
import { getFileJson } from "./helpers";

test.each([1, 2])("bollard response is converted properly", (fileNumber) => {
    const sample = getFileJson("bollards", `peka${fileNumber}.json`);
    const expected = getFileJson("bollards", `node${fileNumber}.json`)

    const actual = convertBollardsResponse(sample);

    expect(actual).toEqual(expected);
});

test.each([3, 4, 5])("bollard response ignores extra properties", (fileNumber) => {
    const sample = getFileJson("bollards", `peka${fileNumber}.json`);
    const expected = getFileJson("bollards", `node${fileNumber}.json`);

    const actual = convertBollardsResponse(sample);

    expect(actual).toEqual(expected);
})