import { SmokeMap } from "./smoke_map";

export class InputParser {
    parse(input: string): SmokeMap {
        const map = new SmokeMap();
        for (let line of this.lines(input)) {
            map.addLine(line);
        }
        return map;
    }

    // Read the input file's string, split along the lines, remove the last (empty) line
    lines(input: string): string[] {
        return input.split("\n").slice(0, -1);
    }
}