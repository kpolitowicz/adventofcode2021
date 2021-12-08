import { sum } from "../00/dummy";
import { InputParser, ParsedInput } from "./input_parser";
import { Decoder } from "./decoder"

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

function sumDecodedNumbers(entries: ParsedInput[]): number {
    let sum = 0;
    let decoder = new Decoder();
    for (let entry of entries) {
        sum += decoder.decode(entry.signalPatterns, entry.outputDigits);
    }
    return sum;
}

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const entries = parser.parse(input);

    return countEasyDigits(entries);
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const entries = parser.parse(input);

    return sumDecodedNumbers(entries);
}