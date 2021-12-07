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

function triangleNumber(n : number): number {
    return n * (n + 1) /2;
}

function calcFuelConsumption(positions: number[], targetPos: number): number {
    let sum = 0;
    for (let crabPos of positions) {
        sum += triangleNumber(Math.abs(crabPos - targetPos));
    }
    return sum;
}

function findMinFuelBetter(positions: number[]) {
    positions.sort((a,b) => a - b);
    let currentMin = Number.POSITIVE_INFINITY;
    
    for (let pos = 0; pos <= positions[positions.length - 1]; pos++) {
        const res = calcFuelConsumption(positions, pos);
        if (res < currentMin) {
            currentMin = res;
        }
    }
    return currentMin;
}

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const positions = parser.parse(input);

    return findMinFuel(positions);
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const positions = parser.parse(input);

    return findMinFuelBetter(positions);
}