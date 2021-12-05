import { VentLine } from './vents';

interface ParsedInput {
    maxX: number;
    maxY: number;
    ventLines: VentLine[];
}

export class InputParser {
    parse(input: string): ParsedInput {
        const lines = this.lines(input);
        let ventLines: VentLine[] = [];
        let maxX = 0;
        let maxY = 0;
        
        for (let line of lines) {
            let m = line.match(/^(\d+),(\d+).*?(\d+),(\d+)$/);
            if (m != null) {
                const x1 = +m[1];
                const y1 = +m[2];
                const x2 = +m[3];
                const y2 = +m[4];
                ventLines.push(new VentLine(x1, y1, x2, y2));
                if (x1 > maxX) { maxX = x1; }
                if (x2 > maxX) { maxX = x2; }
                if (y1 > maxY) { maxY = y2; }
                if (y2 > maxY) { maxY = y2; }
            }
        }

        return { maxX: maxX, maxY: maxY, ventLines: ventLines }
    }

    // Read the input file's string, split along the lines, remove the last (empty) line
    lines(input: string): string[] {
        return input.split("\n").slice(0, -1);
    }
}