import { InputParser } from "./input_parser"
import { PacketDecoder, Packet } from "./decoder"

function sumPacketIds(decoder: PacketDecoder) {
    let sum = 0
    for (let i = 0; i < decoder.stack.length; i++) {
        sum += decoder.stack[i].version
    }
    return sum
}

export function firstAnswer(input: string): number {
    const parser = new InputParser()
    const transmission = parser.parse(input)
    const decoder = new PacketDecoder()

    decoder.parseTransmission(transmission)
    return sumPacketIds(decoder)
}

export function secondAnswer(input: string): number {
    const parser = new InputParser()
    const transmission = parser.parse(input)

    return 0
}