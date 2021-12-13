import { InputParser } from "../../13/input_parser";

test("Parses initial population", () => {
    const input = `6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5
`

    const parser = new InputParser();
    const { paper: paper, folds: folds } = parser.parse(input);
    
    expect(paper.dots.size).toBe(18);
    expect(paper.dots.has('9|0')).toBe(true);

    expect(folds.length).toBe(2);
    expect(folds[1]).toBe('x=5');
});