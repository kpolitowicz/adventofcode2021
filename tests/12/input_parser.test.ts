import { InputParser } from "../../12/input_parser";

test("Parses initial population", () => {
    const input = `start-A
start-b
A-c
A-b
b-d
A-end
b-end
`

    const parser = new InputParser();
    const result = parser.parse(input);
    
    expect(result.edge('start')?.goesTo()).toContain('A');
    expect(result.edge('start')?.goesTo()).toContain('b');
    expect(result.edge('A')?.goesTo()).toContain('start');
    expect(result.edge('A')?.goesTo()).toContain('b');
    expect(result.edge('A')?.goesTo()).toContain('c');
    expect(result.edge('end')?.goesTo()).toContain('A');
    expect(result.edge('end')?.goesTo()).toContain('b');
});