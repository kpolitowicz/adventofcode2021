export interface ParsedInput {
    signalPatterns: string[];
    outputDigits: string[];
}

export class InputParser {
    parse(input: string): ParsedInput[] {
        let result: ParsedInput[] = []
        for (let line of this.lines(input)) {
            // const m = line.match(/^(([a-g]+) ){10}|(){4}$/);
            const splitLine = line.split('|');
            result.push({
                signalPatterns: splitLine[0].trim().split(' '),
                outputDigits: splitLine[1].trim().split(' ')
            });
        }
        return result;
    }

    // Read the input file's string, split along the lines, remove the last (empty) line
    lines(input: string): string[] {
        return input.split("\n").slice(0, -1);
    }
}