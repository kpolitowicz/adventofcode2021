import * as yargs from 'yargs'

let args = yargs
    .option('input', {
        alias: 'i',
        description: "Input file",
        demand: true
    })
    .option('part', {
        alias: 'p',
        description: "Answer part (1 or 2)",
        demand: true
    }).argv;

import fs from 'fs';

// Read the input file, split along the lines, remove the last (empty) line
const input = fs.readFileSync(`./${args.input}`, 'utf8').split("\n").slice(0, -1);
const numbers = input.map((s) => +s);

function findNumberOfIncreases(ary: number[]): number {
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

if (args.part == "1") {
    console.log(findNumberOfIncreases(numbers));
}