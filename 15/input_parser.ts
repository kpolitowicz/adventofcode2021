import { ChitonCavern } from "./pathfinder"

export class InputParser {
    parse(input: string): ChitonCavern {
        const cavern = new ChitonCavern()
        for(let line of this.lines(input)) {
            cavern.addLine(line.split('').map((s) => +s))
        }
        return cavern
    }

    // Read the input file's string, split along the lines, remove the last (empty) line
    lines(input: string): string[] {
        return input.split("\n").slice(0, -1)
    }
}