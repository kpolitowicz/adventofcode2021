import { InputParser } from "../../14/input_parser";
import { InsertionRules} from "../../14/rules";

test("Performs one step", () => {
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
    const actual = rules.apply(init);

    expect(actual).toBe('NCNBCHB');
});
