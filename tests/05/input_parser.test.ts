import { InputParser } from "../../05/input_parser";

test("Parses vent line coordinates", () => {
    const input = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2
`
    const parser = new InputParser();
    const result = parser.parse(input);
    const ventLines = result.ventLines;
    
    expect(ventLines.length).toBe(10);

    expect(ventLines[9].x1).toBe(5);
    expect(ventLines[9].y1).toBe(5);
    expect(ventLines[9].x2).toBe(8);
    expect(ventLines[9].y2).toBe(2);
});

test("Report max X and Y coords", () => {
    const input = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2
`
    const parser = new InputParser();
    const result = parser.parse(input);
    
    expect(result.maxX).toBe(9);
    expect(result.maxY).toBe(9);
});