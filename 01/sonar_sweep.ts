export function findNumberOfIncreases(ary: number[]): number {
    let count = 0;
    let lastNumber = ary[0];

    for (let i = 1; i < ary.length; i++) {
        if (ary[i] > lastNumber) {
            count++;
        }
        lastNumber = ary[i];
    }

    return count;
}

export function findNumberOfWindowIncreases(ary: number[]): number {
    let count = 0;
    let lastNumber = ary[0] + ary[1] + ary[2];

    for (let i = 2; i < ary.length - 2; i++) {
        const nextSum = ary[i] + ary[i + 1] + ary[i + 2]
        if (nextSum > lastNumber) {
            count++;
        }
        lastNumber = nextSum;
    }

    return count;
}