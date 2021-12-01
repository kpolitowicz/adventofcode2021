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

import { findNumberOfIncreases } from "./sonar_sweep";

if (args.part == "1") {
    console.log(findNumberOfIncreases(numbers));
}