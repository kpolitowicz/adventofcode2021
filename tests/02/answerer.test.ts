
import { firstAnswer, secondAnswer } from "../../02/answerer";

test("Answer 1 example", () => {
    const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2
`

    const actual = firstAnswer(input);
    expect(actual).toBe(150);
});

test("Answer 2 example", () => {
    const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2
`

    const actual = secondAnswer(input);
    expect(actual).toBe(900);
});
