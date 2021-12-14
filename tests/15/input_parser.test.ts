import { InputParser } from "../../15/input_parser"

test("Parses initial population", () => {
    const input = `1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581
`

    const parser = new InputParser()
    const result = parser.parse(input)
    
    expect(result.maxX).toBe(10)
    expect(result.maxY).toBe(10)
    expect(result.at(9, 9)).toBe(1)
});