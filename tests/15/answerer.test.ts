import { firstAnswer, secondAnswer } from "../../15/answerer"

test("Answer 1 example", () => {
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

    const actual = firstAnswer(input)
    expect(actual).toBe(40)
})

test("Answer 2 example", () => {
    const input = `16,1,2,0,4,2,7,1,2,14
`

    const actual = secondAnswer(input)
    expect(actual).toBe(0)
})