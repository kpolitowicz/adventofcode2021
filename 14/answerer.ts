import { InputParser } from "./input_parser";

function countFrequency(s: string): [number, number] {
    let freq: Map<string, number> = new Map();
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        const currentCount = freq.get(c);
        if (currentCount) {
            freq.set(c, currentCount + 1);
        } else {
            freq.set(c, 1);
        }
    }
    let min = Number.POSITIVE_INFINITY;
    let max = 0;
    
    freq.forEach((val: number, _) => {
        if (val > max) { max = val; }
        if (val < min) { min = val; }
    });

    return [min, max]
}

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const { init: init, rules: rules } = parser.parse(input);

    let polymer = init;
    for (let i = 0; i < 10; i++) {
        polymer = rules.apply(polymer);
    }
    
    const [min, max] = countFrequency(polymer);
    return max - min;
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const { init: init, rules: rules } = parser.parse(input);

    return 0;
}