import { firstAnswer, secondAnswer } from "../../13/answerer";

test("Answer 1 example", () => {
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

    const actual = firstAnswer(input);
    expect(actual).toBe(17);
});

test("Answer 2 example", () => {
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

    const actual = secondAnswer(input);
    expect(actual).toBe(0);
});
