import { InputParser } from "./input_parser";

function sumRisks(list: number[]) {
    let sum = 0;
    for (let e of list) {
        sum += 1 + e;
    }
    return sum;
}
function multiplyThreeHighest(list: number[]) {
    list.sort((a,b) => b - a)
    return list[0] * list[1] * list[2];
}

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const map = parser.parse(input);

    return sumRisks(map.lowestPoints());
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const map = parser.parse(input);

    map.markAllBasins();
    return multiplyThreeHighest(map.basinSizes);
}