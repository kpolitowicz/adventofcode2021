import { PacketDecoder, Packet } from "../../16/decoder"

test("Parses single number packet", () => {
    const input = '110100101111111000101000'

    const decoder = new PacketDecoder()
    decoder.parseTransmission(input)
    
    expect(decoder.stack.length).toBe(1)
    const packet = decoder.stack[0]
    expect(packet.version).toBe(6)
    expect(packet.id).toBe(4)
    expect(packet.value).toBe(2021)
})

test("Parses number packets in a chunk X bits long", () => {
    const input = '1101000101001010010001001000000000'

    const decoder = new PacketDecoder()
    decoder.parseTransmission(input, 27)
    
    expect(decoder.stack.length).toBe(2)
    expect(decoder.stack[0].value).toBe(10)
    expect(decoder.stack[1].value).toBe(20)
})

test("Parses number packets in a chunk X packets long", () => {
    const input = '01010000001100100000100011000001100000'

    const decoder = new PacketDecoder()
    decoder.parseTransmission(input, null, 3)
    
    expect(decoder.stack.length).toBe(3)
    expect(decoder.stack[0].value).toBe(1)
    expect(decoder.stack[1].value).toBe(2)
    expect(decoder.stack[2].value).toBe(3)
})

test("Parses operator length packet with 2 numbers", () => {
    const input = '00111000000000000110111101000101001010010001001000000000'

    const decoder = new PacketDecoder()
    decoder.parseTransmission(input)
    
    expect(decoder.stack.length).toBe(3)

    const opPacket = decoder.stack[0]
    expect(opPacket.version).toBe(1)
    expect(opPacket.id).toBe(6)

    const numPacket1 = decoder.stack[1]
    expect(numPacket1.value).toBe(10)

    const numPacket2 = decoder.stack[2]
    expect(numPacket2.value).toBe(20)
})

test("Parses operator count packet with 3 numbers", () => {
    const input = '11101110000000001101010000001100100000100011000001100000'

    const decoder = new PacketDecoder()
    decoder.parseTransmission(input)
    
    expect(decoder.stack.length).toBe(4)

    const opPacket = decoder.stack[0]
    expect(opPacket.version).toBe(7)
    expect(opPacket.id).toBe(3)

    const numPacket1 = decoder.stack[1]
    expect(numPacket1.value).toBe(1)

    const numPacket2 = decoder.stack[2]
    expect(numPacket2.value).toBe(2)

    const numPacket3 = decoder.stack[3]
    expect(numPacket3.value).toBe(3)
})