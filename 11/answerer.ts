import { InputParser } from "./input_parser";

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const sim = parser.parse(input);

    for (let i = 0; i < 100; i++) {
        sim.step();
    }
    return sim.flashCount;
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const sim = parser.parse(input);

    let count = 0;
    for (;;) {
        count++;
        sim.step();
        if (sim.allFlashed()) {
            break;
        }
    }
    return count;
}