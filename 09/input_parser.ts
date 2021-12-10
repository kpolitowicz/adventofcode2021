class SmokeMap {
    map: number[][] = [];
    maxX = 0;
    maxY = 0;

    addLine(line: string): void {
        this.map.push(line.split('').map((d) => +d));
        this.maxY = line.length;
        this.maxX++;
    }

    at(x: number, y: number): number {
        return this.map[x][y];
    }

    lowestPoints(): number[] {
       let result: number[] = []; 

       for (let x = 0; x < this.maxX; x++) {
           for (let y = 0; y < this.maxY; y++) {
               if (this.lowestPointAt(x, y)) {
                   result.push(this.at(x, y));
               }
           }
       }
       return result;
    }

    lowestPointAt(x: number, y: number): boolean {
        const current = this.at(x, y);

        if (current == 9) {
            return false;
        }
        // check above
        if (x > 0 && this.at(x - 1, y) <= current) {
            return false;
        }
        // check below
        if (x < (this.maxX - 1) && this.at(x + 1, y) <= current) {
            return false;
        }
        // check to the left
        if (y > 0 && this.at(x, y - 1) <= current) {
            return false;
        }
        // check to the right
        if (y < (this.maxY - 1) && this.at(x, y + 1) <= current) {
            return false;
        }

        return true;
    }
}

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