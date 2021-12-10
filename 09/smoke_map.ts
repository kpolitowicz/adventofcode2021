export class SmokeMap {
    map: number[][] = [];
    marks: boolean[][] = [];
    maxX = 0;
    maxY = 0;
    basinSizes: number[] = [];

    addLine(line: string): void {
        this.map.push(line.split('').map((d) => +d));
        this.maxY = line.length;
        this.maxX++;
        let newMarks: boolean[] = new Array(line.length);
        for (let i = 0; i < line.length; i++) {
            newMarks[i] = false;
        }
        this.marks.push(newMarks);
    }

    at(x: number, y: number): number {
        return this.map[x][y];
    }

    basinAt(x: number, y: number): boolean {
        return this.marks[x][y];
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

    markBasinFrom(x: number, y: number, currentSize = 0): number {
        // if there is already a basin marked here or we're at 9, return
        if (this.at(x, y) == 9 || this.basinAt(x, y)) {
            return currentSize;
        }
    
        this.marks[x][y] = true; 
        currentSize++;

        // check above
        if (x > 0) {
            currentSize = this.markBasinFrom(x - 1, y, currentSize);
        }
        // check below
        if (x < (this.maxX - 1)) {
            currentSize = this.markBasinFrom(x + 1, y, currentSize);
        }
        // check to the left
        if (y > 0) {
            currentSize = this.markBasinFrom(x, y - 1, currentSize);
        }
        // check to the right
        if (y < (this.maxY - 1)) {
            currentSize = this.markBasinFrom(x, y + 1, currentSize);
        }

        return currentSize;
    }

    markAllBasins(): void {
       for (let x = 0; x < this.maxX; x++) {
           for (let y = 0; y < this.maxY; y++) {
               const size = this.markBasinFrom(x, y);
               if (size > 0) {
                   this.basinSizes.push(size);
               }
           }
       }
    }
}