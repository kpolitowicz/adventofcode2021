import { InputParser } from "./input_parser";

function findMinFuel(positions: number[]) {
    positions.sort((a,b) => a - b);
    const median = positions[Math.floor((positions.length - 1) / 2)]

    let fuel = 0;
    for (let e of positions) {
        fuel += Math.abs(e - median);
    }

    return fuel;
}

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const positions = parser.parse(input);

    return findMinFuel(positions);
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const positions = parser.parse(input);

    return findMinFuel(positions);
}