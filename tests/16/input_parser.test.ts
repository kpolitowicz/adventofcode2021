import { InputParser } from "../../16/input_parser"

test("Reads the input and converts it to binary string", () => {
    const input = `D2FE28
`

    const parser = new InputParser()
    const result = parser.parse(input)
    
    expect(result).toBe('110100101111111000101000')
})

test("Reads the input and converts it to binary string, padded with 0s at the start", () => {
    const input = `38006F45291200
`

    const parser = new InputParser()
    const result = parser.parse(input)
    
    expect(result).toBe('00111000000000000110111101000101001010010001001000000000')
})

test("Reads the input and converts it to binary string, padded with 0s, another example", () => {
    const input = `620080001611562C8802118E34
`

    const parser = new InputParser()
    const result = parser.parse(input)
    
    expect(result).toBe('01100010000000001000000000000000000101100001000101010110001011001000100000000010000100011000111000110100')
})