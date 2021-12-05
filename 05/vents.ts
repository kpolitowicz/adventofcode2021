export class VentLine {
    x1: number;
    y1: number;
    x2: number;
    y2: number;

    constructor(x1: number, y1: number, x2: number, y2: number) {
       this.x1 = x1;
       this.y1 = y1;
       this.x2 = x2;
       this.y2 = y2;
    }
}

export class VentMap {
    maxX: number;
    maxY: number;
    mapOfVents: number[] = [];

    constructor(maxX: number, maxY: number) {
        this.maxX = maxX;
        this.maxY = maxY;
        
        const maxCoord = (maxX + 1) * (maxY + 1) - 1;
        for (let i = 0; i <= maxCoord; i++) {
            this.mapOfVents[i] = 0;
        }
    }

    add(vent: VentLine): void {
        // vertical line
        if (vent.x1 == vent.x2) {
            const fromIdx = Math.min(vent.y1, vent.y2);
            const toIdx = Math.max(vent.y1, vent.y2);
            for (let yi = fromIdx; yi <= toIdx; yi++) {
                this.addAt(vent.x1, yi);
            }
            return;
        }

        // horizontal line
        if (vent.y1 == vent.y2) {
            const fromIdx = Math.min(vent.x1, vent.x2);
            const toIdx = Math.max(vent.x1, vent.x2);
            for (let xi = fromIdx; xi <= toIdx; xi++) {
                this.addAt(xi, vent.y1);
            }
        }
    }

    addWithDiagonal(vent: VentLine): void {
        if (vent.x1 == vent.x2) {
            // vertical line
            const fromIdx = Math.min(vent.y1, vent.y2);
            const toIdx = Math.max(vent.y1, vent.y2);
            for (let yi = fromIdx; yi <= toIdx; yi++) {
                this.addAt(vent.x1, yi);
            }
        } else if (vent.y1 == vent.y2) {
            // horizontal line
            const fromIdx = Math.min(vent.x1, vent.x2);
            const toIdx = Math.max(vent.x1, vent.x2);
            for (let xi = fromIdx; xi <= toIdx; xi++) {
                this.addAt(xi, vent.y1);
            }
        } else if (vent.x1 < vent.x2) {
            if (vent.y1 < vent.y2) {
                for (let i = 0; i <= vent.x2 - vent.x1; i++) {
                    this.addAt(vent.x1 + i, vent.y1 + i);
                }
            } else {
                for (let i = 0; i <= vent.x2 - vent.x1; i++) {
                    this.addAt(vent.x1 + i, vent.y1 - i);
                }
            }
        } else if (vent.x1 > vent.x2) {
            if (vent.y1 > vent.y2) {
                for (let i = 0; i <= vent.x1 - vent.x2; i++) {
                    this.addAt(vent.x1 - i, vent.y1 - i);
                }
            } else {
                for (let i = 0; i <= vent.x1 - vent.x2; i++) {
                    this.addAt(vent.x1 - i, vent.y1 + i);
                }
            }
        }
    }

    addAt(x: number, y: number): void {
        const coord = x * (this.maxY + 1) + y;
        this.mapOfVents[coord]++;
    }

    at(x: number, y: number): number {
        const coord = x * (this.maxY + 1) + y;
        return this.mapOfVents[coord];
    }

    dangerousOverlaysCount(maxSafe: number): number {
        let count = 0;
        for (let num of this.mapOfVents) {
            if (num > maxSafe) {
                count++;
            }
        }
        return count;
    }
}