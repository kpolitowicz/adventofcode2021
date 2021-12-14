import { InsertionRules } from "./rules";

interface ParserInput {
    init: string,
    rules: InsertionRules
}

export class InputParser {
    parse(input: string): ParserInput {
        let rulesInput = false;
        let init = '';
        let rules = new InsertionRules();

        for (let line of this.lines(input)) {
            if (line == '') {
                rulesInput = true;
                continue;
            }
            if (rulesInput) {
                let [fromStr, toStr] = line.split(' -> ');
                rules.add(fromStr, toStr);

            } else {
                init = line;
            }

        }
        return { init: init, rules: rules };
    }

    // Read the input file's string, split along the lines, remove the last (empty) line
    lines(input: string): string[] {
        return input.split("\n").slice(0, -1);
    }
}