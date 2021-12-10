import { firstAnswer, secondAnswer } from "../../09/answerer";

test("Answer 1 example", () => {
    const input = `2199943210
3987894921
9856789892
8767896789
9899965678
`

    const actual = firstAnswer(input);
    expect(actual).toBe(15);
});

// test("Answer 2 example", () => {
//     const input = `2199943210
// 3987894921
// 9856789892
// 8767896789
// 9899965678
// `

//     const actual = secondAnswer(input);
//     expect(actual).toBe(168);
// });