/** A physical place where vehicles stop. There usually are multiple bollards for a bus stop. */
export default interface Bollard {
    symbol: string;
    tag: string;
    name: string;
    mainBollard: Boolean;
}