export class OctopusSim {
    octopi: number[][] = [];
    maxX = 0;
    maxY = 0;
    flashCount = 0;

    addLine(line: number[]) {
        this.octopi.push(line);
        this.maxX = this.octopi.length;
        this.maxY = line.length;
    }

    numAt(x: number, y: number): number {
        return this.octopi[x][y];
    }

    step(): void {
        // First, the energy level of each octopus increases by 1.
        for (let x = 0; x < this.maxX; x++) {
            for (let y = 0; y < this.maxY; y++) {
                this.octopi[x][y]++;
            }
        }

        // Then, any octopus with an energy level greater than 9 flashes.
        for (let x = 0; x < this.maxX; x++) {
            for (let y = 0; y < this.maxY; y++) {
                if (this.octopi[x][y] > 9) {
                    this.flashAt(x,y);
                }
            }
        }

        // Finally, any octopus that flashed during this step has its energy level set to 0.
        for (let x = 0; x < this.maxX; x++) {
            for (let y = 0; y < this.maxY; y++) {
                if (this.octopi[x][y] < 0) {
                    this.octopi[x][y] = 0;
                    this.flashCount++;
                }
            }
        }
    }

    flashAt(x: number, y: number) {
        // Mark this coord as already flashed (-1)
        this.octopi[x][y] = -1;

        // Check and maybe flash all the neigbours
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const newX = x + dx;
                const newY = y + dy;

                // ignore invalid coordinates
                if (newX < 0 || newX >= this.maxX || newY < 0 || newY >= this.maxY) {
                    continue;
                }
                // increment neigbour if not already flashed
                if (this.octopi[newX][newY] > -1) {
                    this.octopi[newX][newY]++;
                }
                // if neighbor is over 9, flash them too
                if (this.octopi[newX][newY] > 9) {
                    this.flashAt(newX, newY);
                }
            }
        }
    }

    allFlashed(): boolean {
        for (let x = 0; x < this.maxX; x++) {
            for (let y = 0; y < this.maxY; y++) {
                if (this.octopi[x][y] > 0) {
                    return false;
                }
            }
        }
        return true;
    }

    debug(): void {
        let s = '';
        for (let x = 0; x < this.maxX; x++) {
            for (let y = 0; y < this.maxY; y++) {
                s += this.octopi[x][y] == -1 ? 'X' : (this.octopi[x][y] > 9 ? '@' : this.octopi[x][y]);
            }
            s += "\n";
        }
        console.log(s);
    }
}