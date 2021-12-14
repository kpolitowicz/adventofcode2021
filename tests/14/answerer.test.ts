import { firstAnswer, secondAnswer } from "../../14/answerer";

test("Answer 1 example", () => {
    const input = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C
`

    const actual = firstAnswer(input);
    expect(actual).toBe(1588);
});

test("Answer 2 example", () => {
    const input = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C
`

    const actual = secondAnswer(input);
    expect(actual).toBe(0);
});
