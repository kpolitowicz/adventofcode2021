import { InputParser } from "./input_parser";
import { BoatyMcBoatface } from "./boaty_mc_boatface";

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const commands = parser.parse(input);

    let sub = new BoatyMcBoatface();
    for (let entry of commands) {
        sub.command(entry.cmd, entry.x);
    }

    return sub.horizontalPosition * sub.depth;
}