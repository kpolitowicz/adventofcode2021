import { firstAnswer, secondAnswer } from "../../06/answerer";

test("Answer 1 example", () => {
    const input = `3,4,3,1,2
`

    const actual = firstAnswer(input);
    expect(actual).toBe(5934);
});

// test("Answer 2 example", () => {
//     const input = `3,4,3,1,2`

//     const actual = secondAnswer(input);
//     expect(actual).toBe(12);
// });
