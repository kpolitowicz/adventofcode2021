import { OctopusSim } from "./octopi";

export class InputParser {
    parse(input: string): OctopusSim {
        const sim = new OctopusSim();
        for (let line of this.lines(input)) {
            sim.addLine(line.split('').map((e) => +e));
        }
        return sim;
    }

    // Read the input file's string, split along the lines, remove the last (empty) line
    lines(input: string): string[] {
        return input.split("\n").slice(0, -1);
    }
}