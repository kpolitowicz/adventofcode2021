import { InputParser } from "./input_parser";


export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const network = parser.parse(input);

    return network.countPaths();
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const network = parser.parse(input);

    return network.countPathsOneSmallTwice();
}