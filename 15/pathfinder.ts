export class ChitonCavern {
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

    scale() {
        let newGrid: number[][] = []

        for (let i = 0; i < 5; i++) {
            for (let xi = 0; xi < this.maxX; xi++) {
                let row = new Array<number>(this.maxY * 5)
                for (let yi = 0; yi < this.maxY; yi++) {
                    row[yi + 0 * this.maxY] = this.inc(this.at(xi,yi), i + 0)
                    row[yi + 1 * this.maxY] = this.inc(this.at(xi,yi), i + 1)
                    row[yi + 2 * this.maxY] = this.inc(this.at(xi,yi), i + 2)
                    row[yi + 3 * this.maxY] = this.inc(this.at(xi,yi), i + 3)
                    row[yi + 4 * this.maxY] = this.inc(this.at(xi,yi), i + 4)
                }
                newGrid.push(row)
            }
        }

        this.grid = newGrid
        this.maxX *= 5
        this.maxY *= 5
    }

    inc(n: number, by: number): number {
        let newNum = n + by
        if (newNum > 9) { newNum -= 9 }
        return newNum
    }
}