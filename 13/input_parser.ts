import { Paper } from "./folds";

interface ParserInput {
    paper: Paper,
    folds: string[]
}

export class InputParser {
    parse(input: string): ParserInput {
        const paper = new Paper();
        let folds: string[] = [];
        let dotsInput = true;

        for (let line of this.lines(input)) {
            if (line == '') {
                dotsInput = false;
                continue;
            }
            if (dotsInput) {
                let coords = line.split(',');
                paper.add(+coords[0], +coords[1]);
            } else {
                const splitLine = line.split(' ');
                folds.push(splitLine[2]);
            }
        }
        // return this.lines(input)[0].split(',').map((s) => +s);
        return { paper: paper, folds: folds }
    }

    // Read the input file's string, split along the lines, remove the last (empty) line
    lines(input: string): string[] {
        return input.split("\n").slice(0, -1);
    }
}