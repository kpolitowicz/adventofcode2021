import { firstAnswer, secondAnswer } from "../../16/answerer"

test("Answer 1 example 1", () => {
    const input = `8A004A801A8002F478
`

    const actual = firstAnswer(input)
    expect(actual).toBe(16)
})
test("Answer 1 example 2", () => {
    const input = `620080001611562C8802118E34
`

    const actual = firstAnswer(input)
    expect(actual).toBe(12)
})
test("Answer 1 example 3", () => {
    const input = `C0015000016115A2E0802F182340
`

    const actual = firstAnswer(input)
    expect(actual).toBe(23)
})
test("Answer 1 example 4", () => {
    const input = `A0016C880162017C3686B18A3D4780
`

    const actual = firstAnswer(input)
    expect(actual).toBe(31)
})

test("Answer 2 example 1 (sum)", () => {
    const input = `C200B40A82
`

    const actual = secondAnswer(input)
    expect(actual).toBe(3)
})
test("Answer 2 example 2 (product)", () => {
    const input = `04005AC33890
`

    const actual = secondAnswer(input)
    expect(actual).toBe(54)
})
test("Answer 2 example 3 (min)", () => {
    const input = `880086C3E88112
`

    const actual = secondAnswer(input)
    expect(actual).toBe(7)
})
test("Answer 2 example 4 (max)", () => {
    const input = `CE00C43D881120
`

    const actual = secondAnswer(input)
    expect(actual).toBe(9)
})
test("Answer 2 example 5 (lt)", () => {
    const input = `D8005AC2A8F0
`

    const actual = secondAnswer(input)
    expect(actual).toBe(1)
})
test("Answer 2 example 6 (gt)", () => {
    const input = `F600BC2D8F
`

    const actual = secondAnswer(input)
    expect(actual).toBe(0)
})
test("Answer 2 example 7 (eq)", () => {
    const input = `9C005AC2F8F0
`

    const actual = secondAnswer(input)
    expect(actual).toBe(0)
})
test("Answer 2 example 8", () => {
    const input = `9C0141080250320F1802104A08
`

    const actual = secondAnswer(input)
    expect(actual).toBe(1)
})