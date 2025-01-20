/** Represents a line and its' destination. Also includes a weird property: `returnVariant`. */
export default interface Direction {
    returnVariant: Boolean;
    direction: string;
    lineName: string;
}