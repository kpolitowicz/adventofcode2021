import { InputParser } from "./input_parser";

function simulatePopulationNumbers(population: number[], days: number) {
    let curentNumbers = [0,0,0,0,0,0,0,0,0];
    for(let fish of population) {
        curentNumbers[fish]++;
    }

    for (let i = 0; i < days; i++) {
        const zeroes = curentNumbers.shift() || 0;

        // zeroes become 6s and also spawn ne 8s
        curentNumbers[6] += zeroes;
        curentNumbers[8] = zeroes;
    }


    let sum = 0;
    for (let num of curentNumbers) {
        if (num != undefined) { 
            sum += num;
        }
    }
    return sum;
}

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const population = parser.parse(input);

    return simulatePopulationNumbers(population, 80);
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const population = parser.parse(input);

    return simulatePopulationNumbers(population, 256);
}