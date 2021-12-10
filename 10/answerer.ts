import { InputParser } from "./input_parser";

import { findIllegalChars, calcSyntaxScore } from "./checker";

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const chunks = parser.parse(input);

    const firstIllegalChars = findIllegalChars(chunks);
    return calcSyntaxScore(firstIllegalChars);
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const positions = parser.parse(input);

    return 0;
}