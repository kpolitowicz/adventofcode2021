import { InputParser } from "../../09/input_parser";

test("Parses initial population", () => {
    const input = `2199943210
3987894921
9856789892
8767896789
9899965678
`

    const parser = new InputParser();
    const map = parser.parse(input);
    
    expect(map.at(0,0)).toBe(2);
    expect(map.at(4,9)).toBe(8);
});