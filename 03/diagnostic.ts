class Counter {
    zeroes = 0;
    ones = 0;

    add(value: string): void {
        if (value == '0') {
           this.zeroes++;
        } else {
            this.ones++;
        }
    }
}

export class DiagnosticCalculator {
    readings: Counter[] = [];

    add(reading: string): void {
        for (let i = 0; i < reading.length; i++) {
            if (this.readings[i] === undefined) {
                this.readings[i] = new Counter();
            }
            this.readings[i].add(reading.charAt(i));
        }
    }

    // For each position, check which value occurs more often and take it,
    // constructing a binary number - return the decimal representation of it.
    gammaRate(): number {
        let binaryNumber = '';

        for (let bit of this.readings) {
            if (bit.zeroes > bit.ones) {
                binaryNumber += '0';
            } else {
                binaryNumber += '1';
            }

        }
        return parseInt(binaryNumber, 2);
    }

    // For each position, check which value occurs less often and take it,
    // constructing a binary number - return the decimal representation of it.
    // Epsilon is binary opposite of gamma.
    epsilonRate(): number {
        let binaryNumber = '';

        for (let bit of this.readings) {
            if (bit.zeroes > bit.ones) {
                binaryNumber += '1';
            } else {
                binaryNumber += '0';
            }

        }
        return parseInt(binaryNumber, 2);
    }
}