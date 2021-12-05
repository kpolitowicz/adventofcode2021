import { InputParser } from "../../06/input_parser";

test("Parses initial population", () => {
    const input = `3,4,3,1,2
`

    const parser = new InputParser();
    const result = parser.parse(input);
    
    expect(result.length).toBe(5);
    expect(result[4]).toBe(2);
});