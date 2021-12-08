export class Decoder {
    decode(signalPatterns: string[], outputDigits: string[]): number {
        let foundSoFar = this.findEasyDigits(signalPatterns);
        foundSoFar = this.findSixSegmentDigits(signalPatterns, foundSoFar);
        foundSoFar = this.findFiveSegmentDigits(signalPatterns, foundSoFar);

        const digits = this.decodeOutputDigits(outputDigits, foundSoFar);
        return +digits.join('');
    }

    findEasyDigits(signalPatterns: string[]): string[][] {
        let result: string[][] = new Array(10);
        for (let pattern of signalPatterns) {
            let splitPattern = pattern.split('');
            splitPattern.sort();
            switch (pattern.length) {
                case 2:
                    result[1] = splitPattern;
                    break;
                case 3:
                    result[7] = splitPattern;
                    break;
                case 4:
                    result[4] = splitPattern;
                    break;
                case 7:
                    result[8] = splitPattern;
                    break;
            }

        }
        return result;
    }
    findSixSegmentDigits(signalPatterns: string[], foundSoFar: string[][]): string[][] {
        let sixSegmentPatterns = signalPatterns.filter((p) => p.length == 6);
        for (let pattern of sixSegmentPatterns) {
            let splitPattern = pattern.split('');
            splitPattern.sort();

            // The only six-segment number that doesn't contain "1" is "6"
            const diff6 = foundSoFar[1].filter(x => !splitPattern.includes(x));
            if (diff6.length > 0) {
                foundSoFar[6] = splitPattern;
                sixSegmentPatterns = sixSegmentPatterns.filter((p) => p != pattern);
                continue;
            } 

            // The only six-segment number that doesn't contain "4" is "0"
            const diff0 = foundSoFar[4].filter(x => !splitPattern.includes(x));
            if (diff0.length > 0) {
                foundSoFar[0] = splitPattern;
                sixSegmentPatterns = sixSegmentPatterns.filter((p) => p != pattern);
            } 
        }
        let splitPattern = sixSegmentPatterns[0].split('');
        splitPattern.sort();
        foundSoFar[9] = splitPattern;

        return foundSoFar;
    }
    findFiveSegmentDigits(signalPatterns: string[], foundSoFar: string[][]): string[][] {
        let fiveSegmentPatterns = signalPatterns.filter((p) => p.length == 5);
        for (let pattern of fiveSegmentPatterns) {
            let splitPattern = pattern.split('');
            splitPattern.sort();

            // The only five-segment number that does contain "1" is "3"
            const diff3 = foundSoFar[1].filter(x => !splitPattern.includes(x));
            if (diff3.length == 0) {
                foundSoFar[3] = splitPattern;
                fiveSegmentPatterns = fiveSegmentPatterns.filter((p) => p != pattern);
                continue;
            } 
            // The only five-segment number that is contained by "6" is "5"
            const diff5 = splitPattern.filter(x => !foundSoFar[6].includes(x));
            if (diff5.length == 0) {
                foundSoFar[5] = splitPattern;
                fiveSegmentPatterns = fiveSegmentPatterns.filter((p) => p != pattern);
                continue;
            } 
            // The only five-segment number that is not contained by "9" is "2"
            const diff2 = splitPattern.filter(x => !foundSoFar[9].includes(x));
            if (diff5.length > 0) {
                foundSoFar[2] = splitPattern;
                fiveSegmentPatterns = fiveSegmentPatterns.filter((p) => p != pattern);
            } 
        }

        return foundSoFar;
    }
    decodeOutputDigits(outputDigits: string[], foundSoFar: string[][]): number[] {
        let result: number[] = [];
        for (let digit of outputDigits) {
            let splitPattern = digit.split('');
            splitPattern.sort();

            for (let i = 0; i < 10; i++) {
                if (this.arraysEqual(foundSoFar[i], splitPattern)) {
                    result.push(i);
                    break;
                }
            }
        }
        return result;
    }
    arraysEqual(a: string[], b: string[]): boolean {
        return JSON.stringify(a)==JSON.stringify(b);
    }
}