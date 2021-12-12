import { InputParser } from "../../11/input_parser";

test("Parses input octopus arrangement", () => {
    const input = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526
`

    const parser = new InputParser();
    const result = parser.parse(input);
    
    expect(result.numAt(0,0)).toBe(5);
    expect(result.numAt(9,9)).toBe(6);
});