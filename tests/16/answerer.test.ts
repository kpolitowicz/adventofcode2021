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

// test("Answer 2 example 1", () => {
//     const input = `8A004A801A8002F478
// `

//     const actual = secondAnswer(input)
//     expect(actual).toBe(0)
// })