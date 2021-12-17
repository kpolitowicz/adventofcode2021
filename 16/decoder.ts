export class Packet {
    version: number
    id: number
    value: number | null

    constructor(version: number, id: number, value: number | null = null) {
        this.version = version
        this.id = id
        this.value = value
    }
}

export class PacketDecoder {
    cursor = 0
    stack: Packet[] = []

    parseTransmission(transmission: string, length: number | null = null, count: number | null = null) {
        let i = 1
        for (;;) {
            const version = this.parseIdVersion(transmission)
            const id = this.parseIdVersion(transmission)

            if (id == 4) {
                // Literal/number
                const num = this.parseLiteral(transmission, version, id)
            } else {
                // Operator packet
                this.parseOperatorPacket(transmission, version, id)
            }

            if (length != null && this.cursor < length - 1) {
                continue
            }
            if (count != null && i < count) {
                i++
                continue
            }

            break
        }
    }

    parseOperatorPacket(transmission: string, version: number, id: number) {
        // push packet, then check what's inside
        this.stack.push(new Packet(version, id))

        const lenTypeId = transmission[this.cursor]
        this.cursor++
        if (lenTypeId == '0') {
            // Gives length of the subpackets
            const len = parseInt(transmission.slice(this.cursor, this.cursor + 15), 2)
            this.cursor += 15

            // Now parse contaned packets up to given length
            const subtransmission = transmission.slice(this.cursor)
            this.cursor += len
            const innerDecoder = new PacketDecoder()
            innerDecoder.parseTransmission(subtransmission, len)
            this.stack.push(...innerDecoder.stack)
        } else {
            // Gives the count of subpackets
            const cnt = parseInt(transmission.slice(this.cursor, this.cursor + 11), 2)
            this.cursor += 11

            // Now parse contaned packets up to given count
            const subtransmission = transmission.slice(this.cursor)
            const innerDecoder = new PacketDecoder()
            innerDecoder.parseTransmission(subtransmission, null, cnt)
            this.stack.push(...innerDecoder.stack)
            this.cursor += innerDecoder.cursor
        }
    }

    parseIdVersion(transmission: string): number {
        const numBinary = transmission.slice(this.cursor, this.cursor + 3)
        this.cursor += 3

        return parseInt(numBinary, 2)
    }

    parseLiteral(transmission: string, version: number, id: number) {
        let numBinary = ''
        for (;;) {
            const header = transmission[this.cursor]
            numBinary += transmission.slice(this.cursor + 1, this.cursor + 5)
            this.cursor += 5

            // stop if the last part of the number literal
            if (header == '0') { break }
        }
        this.stack.push(new Packet(version, id, parseInt(numBinary, 2)))
    }
}