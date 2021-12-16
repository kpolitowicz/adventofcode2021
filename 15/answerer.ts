import { InputParser } from "./input_parser"

export function firstAnswer(input: string): number {
    const parser = new InputParser()
    const cavern = parser.parse(input)

    return cavern.djikstraDamnIt()
}

export function secondAnswer(input: string): number {
    const parser = new InputParser()
    const cavern = parser.parse(input)

    cavern.scale()
    return cavern.djikstraDamnIt()
}