import { InputParser } from "../../07/input_parser";

test("Parses initial population", () => {
    const input = `16,1,2,0,4,2,7,1,2,14
`

    const parser = new InputParser();
    const result = parser.parse(input);
    
    expect(result.length).toBe(10);
    expect(result[9]).toBe(14);
});