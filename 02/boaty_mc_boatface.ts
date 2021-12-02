export class BoatyMcBoatface {
    horizontalPosition = 0;
    depth = 0;

    forward(x: number): void {
        this.horizontalPosition += x;
    }

    up(x: number): void {
        this.depth -= x;
    }

    down(x: number): void {
        this.depth += x;
    }

    command(cmd: string, x: number): void {
        switch(cmd) {
            case "forward":
                this.forward(x);
                break;
            case "up":
                this.up(x);
                break;
            case "down":
                this.down(x);
                break;
        }
    }
}