import { render, screen } from "@testing-library/react";
import VehicleData from "../components/VehicleData";

describe("VehicleData", () => {
    it("displays ramp accessibility", () => {
        render(<VehicleData vehicle={{ id: "x", ramp: true }} />);

        expect(screen.getByText("ramp")).not.toBeUndefined();
    });

    it("displays LF accessibility", () => {
        render(<VehicleData vehicle={{ id: "x", lowFloor: true }} />);

        expect(screen.getByText("fully low floor")).not.toBeUndefined();
    });

    it("displays LE accessibility", () => {
        render(<VehicleData vehicle={{ id: "x", lowEntrance: true }} />);

        expect(screen.getByText("partially low entrance")).not.toBeUndefined();
    });

    it("displays mixed accessibility (ramp + LE)", () => {
        render(<VehicleData vehicle={{ id: "x", lowEntrance: true, ramp: true }} />);

        expect(screen.getByText("ramp, partially low entrance")).not.toBeUndefined();
    });

    it("displays mixed accessibility (ramp + LF)", () => {
        render(<VehicleData vehicle={{ id: "x", lowFloor: true, ramp: true }} />);

        expect(screen.getByText("ramp, fully low floor")).not.toBeUndefined();
    });

    it("displays unknown accessibility", () => {
        render(<VehicleData vehicle={{ id: "x" }} />);

        expect(screen.getByText("Unknown")).not.toBeUndefined();
    });
});