import { InputParser } from "./input_parser";

function countFrequency(freq: Map<string, number>): [number, number] {
    let min = Number.POSITIVE_INFINITY;
    let max = 0;
    
    freq.forEach((val: number, _) => {
        if (val > max) { max = val; }
        if (val < min) { min = val; }
    });

    return [min / 2, max / 2]
}

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const { init: init, rules: rules } = parser.parse(input);

    rules.setInit(init);
    for (let i = 0; i < 10; i++) {
        rules.applySmarter();
    }
    
    const [min, max] = countFrequency(rules.letterFreq(init));
    return max - min;
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const { init: init, rules: rules } = parser.parse(input);

    rules.setInit(init);
    for (let i = 0; i < 40; i++) {
        rules.applySmarter();
    }
    
    const [min, max] = countFrequency(rules.letterFreq(init));
    return max - min;
}