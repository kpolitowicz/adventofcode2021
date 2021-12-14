class ChitonCavern {
    maxX = 0
    maxY = 0
    grid: number[][] = []
    visited: boolean[][] = []
    minTotalRisk: number[][] = []

    addLine(line: number[]) {
        this.grid.push(line)
        this.maxX = line.length
        this.maxY++
    }

    at(x: number, y: number): number {
        // console.log(x, y)
        // console.log(this)
        return this.grid[x][y]
    }

    djikstraDamnIt(): number {
        // init visited and minTotalRisk
        for (let xi = 0; xi < this.maxX; xi++) {
            this.visited.push([])
            this.minTotalRisk.push([])
            for (let yi = 0; yi < this.maxY; yi++) {
                this.visited[xi].push(false)
                this.minTotalRisk[xi].push(Number.POSITIVE_INFINITY)
            }
        }

        // Start with (0,0)
        let [currentX, currentY] = [0,0]
        this.minTotalRisk[0][0] = 0

        for (;;) {
            // Check all the neighbours
            if (currentX < (this.maxX - 1) && !this.visited[currentX + 1][currentY]) {
                this.minTotalRisk[currentX + 1][currentY] = Math.min(this.minTotalRisk[currentX + 1][currentY], this.minTotalRisk[currentX][currentY] + this.at(currentX + 1,currentY))
            }
            if (currentX > 0 && !this.visited[currentX - 1][currentY]) {
                this.minTotalRisk[currentX - 1][currentY] = Math.min(this.minTotalRisk[currentX - 1][currentY], this.minTotalRisk[currentX][currentY] + this.at(currentX - 1,currentY))
            }
            if (currentY < (this.maxY - 1) && !this.visited[currentX][currentY + 1]) {
                this.minTotalRisk[currentX][currentY + 1] = Math.min(this.minTotalRisk[currentX][currentY + 1], this.minTotalRisk[currentX][currentY] + this.at(currentX,currentY + 1))
            }
            if (currentY > 0 && !this.visited[currentX][currentY - 1]) {
                this.minTotalRisk[currentX][currentY - 1] = Math.min(this.minTotalRisk[currentX][currentY - 1], this.minTotalRisk[currentX][currentY] + this.at(currentX,currentY - 1))
            }
            
            // Mark as visited
            this.visited[currentX][currentY] = true
            
            // Find the next unvisited node with min distance
            let [minRisk, minRiskX, minRiskY] = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
            for (let xi = 0; xi < this.maxX; xi++) {
                for (let yi = 0; yi < this.maxY; yi++) {
                    if (!this.visited[xi][yi] && this.minTotalRisk[xi][yi] < minRisk) {
                        minRisk = this.minTotalRisk[xi][yi]
                        minRiskX = xi
                        minRiskY = yi
                    }
                }
            }
            if (minRiskX < Number.POSITIVE_INFINITY) {
                currentX = minRiskX
                currentY = minRiskY
            } else {
                // all nodes visited
                break
            }
        }

        return this.minTotalRisk[this.maxX - 1][this.maxY - 1]
    }
}

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