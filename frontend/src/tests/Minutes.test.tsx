import { render, screen } from "@testing-library/react";
import Minutes from "../components/Minutes";

describe("Minutes", () => {
    test.each([7, 31, 8, 5, 1, 59])("displays minutes normally", (min) => {
        render(<Minutes minutes={min} live={true} exactTime={"xx:xx"} />);

        expect(screen.getByText(min + " min")).not.toBeUndefined();
    });

    test.each([60, 67, 98, 131])("displays alternative time for large minutes", (min) => {
        render(<Minutes minutes={min} live={true} exactTime={"xx:xx"} />);

        expect(screen.getByText("~xx:xx")).not.toBeUndefined();
    });

    it("displays <1 min", () => {
        render(<Minutes minutes={0} live={true} exactTime="xx:xx" />);

        expect(screen.getByText("<1 min")).not.toBeUndefined();
    });
});