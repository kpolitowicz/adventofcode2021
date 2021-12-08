import { InputParser, ParsedInput } from "./input_parser";

function countEasyDigits(entries: ParsedInput[]): number {
    let count = 0;
    for (let entry of entries) {
        for (let digit of entry.outputDigits) {
            if (digit.length == 2 || digit.length == 3 || digit.length == 4 || digit.length == 7) {
                count++;
            }
        }
    }
    return count;
}

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const entries = parser.parse(input);

    return countEasyDigits(entries);
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const positions = parser.parse(input);

    return 0;
}