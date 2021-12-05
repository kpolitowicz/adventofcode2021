import { InputParser } from "./input_parser";

function simulatePopulationNumbers(population: number[], days: number) {
    let simulations: number[] = new Array(9);
    let sum = 0;

    for (let fish of population) {
        if (simulations[fish] == undefined) {
            let onePopSim = [fish];
            for (let i = 0; i < days; i++) {
                const popSize = onePopSim.length;
                for(let j = 0; j < popSize; j++) {
                    if (onePopSim[j] == 0) {
                        onePopSim[j] = 6;
                        onePopSim.push(8);
                    } else {
                        onePopSim[j]--;
                    }
                }
            }
            simulations[fish] = onePopSim.length;
        }
        sum += simulations[fish];
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

    return 0;
}