import { InputParser } from "../../15/input_parser"

test("Scales initial grid 5x", () => {
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
    result.scale()
    
    expect(result.maxX).toBe(50)
    expect(result.maxY).toBe(50)
    expect(result.at(49, 49)).toBe(9)
});
