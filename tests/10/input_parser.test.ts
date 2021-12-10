import { InputParser } from "../../10/input_parser";

test("Parses initial population", () => {
    const input = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]
`

    const parser = new InputParser();
    const result = parser.parse(input);
    
    expect(result.length).toBe(10);
    expect(result[9]).toBe('<{([{{}}[<[[[<>{}]]]>[]]');
});