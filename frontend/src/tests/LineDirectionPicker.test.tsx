import { render, screen, fireEvent } from "@testing-library/react";
import LineDirectionPicker from "../components/LineDirectionPicker";

describe("LineDirectionPicker", () => {
    it("has correct initial state", () => {
        render(<LineDirectionPicker directions={["Dir1", "Dir2", "Dir3"]} onSelection={() => { }} />);
        expect(screen.getByText("Dir1 ▼")).not.toBeUndefined();
    });

    it("changes displayed selection on click", () => {
        render(<LineDirectionPicker directions={["Dir1", "clickme", "Dir3"]} onSelection={() => { }} />);

        fireEvent.click(screen.getByText("clickme"));

        expect(screen.getByText("clickme ▼")).not.toBeUndefined();
    });

    it("expands on click", () => {
        render(<LineDirectionPicker directions={["1", "2"]} onSelection={() => { }} />);

        fireEvent.click(screen.getByText("1 ▼"));

        expect(screen.getByText("1 ▲")).not.toBeUndefined();
    });

    it("hides when expanded and clicked", () => {
        render(<LineDirectionPicker directions={["1", "2"]} onSelection={() => { }} />);

        fireEvent.click(screen.getByText("1 ▼"));
        fireEvent.click(screen.getByText("1 ▲"));

        expect(screen.getByText("1 ▼")).not.toBeUndefined();
    });

    it("fires callback when selection changes", () => {
        const onSelectionFakeCallback = vitest.fn();
        render(<LineDirectionPicker directions={["1", "desiredDirection"]} onSelection={onSelectionFakeCallback} />);

        fireEvent.click(screen.getByText("desiredDirection"))

        expect(onSelectionFakeCallback).toHaveBeenCalledWith(1)
    });
});