import { firstAnswer, secondAnswer } from "../../07/answerer";

test("Answer 1 example", () => {
    const input = `16,1,2,0,4,2,7,1,2,14
`

    const actual = firstAnswer(input);
    expect(actual).toBe(37);
});

// test("Answer 2 example", () => {
//     const input = `16,1,2,0,4,2,7,1,2,14
// `

//     const actual = secondAnswer(input);
//     expect(actual).toBe(26984457539);
// });
