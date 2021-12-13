import { InputParser } from "./input_parser";

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const { paper: paper, folds: folds } = parser.parse(input);

    paper.fold(folds[0]);

    return paper.dots.size;
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const { paper: paper, folds: folds } = parser.parse(input);

    return 0;
}