import { InputParser } from "../../14/input_parser";

test("Parses initial population", () => {
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

    const parser = new InputParser();
    const { init: init, rules: rules } = parser.parse(input);
    
    expect(init).toBe('NNCB');
    expect(rules.rules.size).toBe(16);
    expect(rules.on('CC')).toBe('N');
});