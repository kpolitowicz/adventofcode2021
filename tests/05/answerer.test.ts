
import { firstAnswer, secondAnswer } from "../../05/answerer";

test("Answer 1 example", () => {
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

    const actual = firstAnswer(input);
    expect(actual).toBe(5);
});

test("Answer 2 example", () => {
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

    const actual = secondAnswer(input);
    expect(actual).toBe(12);
});
