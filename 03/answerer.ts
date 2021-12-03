import { InputParser } from "./input_parser";
import { DiagnosticCalculator } from "./diagnostic";

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const outputs = parser.parse(input);

    let calc = new DiagnosticCalculator();
    for (let entry of outputs) {
        calc.add(entry);
    }

    return calc.gammaRate() * calc.epsilonRate();
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const outputs = parser.parse(input);

    // let sub = new WeirderSub();
    // for (let entry of commands) {
    //     sub.command(entry.cmd, entry.x);
    // }

    // return sub.horizontalPosition * sub.depth;
    return 0;
}