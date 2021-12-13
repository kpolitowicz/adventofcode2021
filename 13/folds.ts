export class Paper {
    dots: Map<string, void> = new Map();

    add(x: number, y: number): void {
        this.dots.set(`${x}|${y}`);
    }

    fold(spec: string): void {
        const [axis, axisLine] = spec.split('=');
        const axisLineNum = +axisLine;

        const newDots: Map<string, void> = new Map(); 
        this.dots.forEach((_, coord: string) => {
            const [x, y] = coord.split('|').map((e) => +e);
            newDots.set(this.foldOn(axis, axisLineNum, x, y));
        });

        this.dots = newDots;
    }

    foldOn(axis: string, axisLine: number, x: number, y: number): string {
        let newX = x;
        let newY = y;
       
        switch (axis) {
            case 'x':
                if (x >= axisLine) {
                    newX = 2 * axisLine - x;
                }
                break;
            case 'y':
                if (y >= axisLine) {
                    newY = 2 * axisLine - y;
                }
                break;
        }

        return `${newX}|${newY}`;
    }
}