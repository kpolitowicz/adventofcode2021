import { InputParser } from "./input_parser";
import { VentMap } from "./vents";

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const parsedInput = parser.parse(input);

    let ventMap = new VentMap(parsedInput.maxX, parsedInput.maxY);

    for (let vent of parsedInput.ventLines) {
        ventMap.add(vent);
    }

    return ventMap.dangerousOverlaysCount(1);
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const parsedInput = parser.parse(input);

    let ventMap = new VentMap(parsedInput.maxX, parsedInput.maxY);

    for (let vent of parsedInput.ventLines) {
        ventMap.addWithDiagonal(vent);
    }

    return ventMap.dangerousOverlaysCount(1);
}