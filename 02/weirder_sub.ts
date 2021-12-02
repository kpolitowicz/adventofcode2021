export class WeirderSub {
    horizontalPosition = 0;
    depth = 0;
    aim = 0;

    forward(x: number): void {
        this.horizontalPosition += x;
        this.depth += this.aim * x;
    }

    up(x: number): void {
        this.aim -= x;
    }

    down(x: number): void {
        this.aim += x;
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