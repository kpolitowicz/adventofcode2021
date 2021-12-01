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