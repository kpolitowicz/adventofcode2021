import { InputParser } from "../../14/input_parser";

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

test("Performs one step using mem efficiently", () => {
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
    
    rules.setInit(init);
    rules.applySmarter();

    // After 1 step NNCB becomes NCNBCHB
    // So there should be NC, CN, NB, BC, CH and HB
    // In our algorithm, we double-count each letter
    const letterFreq = rules.letterFreq(init);
    
    expect(letterFreq.get('H')).toBe(2 * 1);
    expect(letterFreq.get('N')).toBe(2 * 2);
});

test("Counts correctly after 2 steps", () => {
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
    
    rules.setInit(init);
    rules.applySmarter();
    rules.applySmarter();

    // After 2 steps NNCB becomes NBCCNBBBCBHCB (via NCNBCHB)
    // In our algorithm, we double-count each letter
    const letterFreq = rules.letterFreq(init);
    expect(letterFreq.get('H')).toBe(2 * 1);
    expect(letterFreq.get('N')).toBe(2 * 2);
    expect(letterFreq.get('B')).toBe(2 * 6);
});

test("Counts correctly after 3 steps", () => {
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
    
    rules.setInit(init);
    rules.applySmarter();
    rules.applySmarter();
    rules.applySmarter();

    // After 3 steps NNCB becomes NBBBCNCCNBBNBNBBCHBHHBCHB
    // In our algorithm, we double-count each letter
    const letterFreq = rules.letterFreq(init);
    expect(letterFreq.get('H')).toBe(2 * 4);
    expect(letterFreq.get('N')).toBe(2 * 5);
});