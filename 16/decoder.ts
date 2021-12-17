export class Packet {
    version: number
    id: number
    value: number | null
    subpackets: Packet[] = []

    constructor(version: number, id: number, value: number | null = null) {
        this.version = version
        this.id = id
        this.value = value
    }

    add(packets: Packet[]) {
        this.subpackets = packets
    }
}

export class PacketDecoder {
    cursor = 0
    stack: Packet[] = []
    directChildren: Packet[] = []

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
        let packet = new Packet(version, id)
        // this.stack.push()

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
            packet.add(innerDecoder.directChildren)
            this.stack.push(packet)
            this.stack.push(...innerDecoder.stack)
            this.directChildren.push(packet)
        } else {
            // Gives the count of subpackets
            const cnt = parseInt(transmission.slice(this.cursor, this.cursor + 11), 2)
            this.cursor += 11

            // Now parse contaned packets up to given count
            const subtransmission = transmission.slice(this.cursor)
            const innerDecoder = new PacketDecoder()
            innerDecoder.parseTransmission(subtransmission, null, cnt)
            packet.add(innerDecoder.directChildren)
            this.stack.push(packet)
            this.stack.push(...innerDecoder.stack)
            this.directChildren.push(packet)
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
        const packet = new Packet(version, id, parseInt(numBinary, 2)) 
        this.stack.push(packet)
        this.directChildren.push(packet)
    }

    compute(fromPacket: Packet): number {
        let num0: number
        let num1: number
        switch (fromPacket.id) {
            case 0: 
                let sum = 0
                fromPacket.subpackets.forEach((p) => sum += this.compute(p))
                return sum
            case 1: 
                let prod = 1
                fromPacket.subpackets.forEach((p) => prod *= this.compute(p))
                return prod
            case 2: 
                return Math.min(...fromPacket.subpackets.map((p) => this.compute(p)))
            case 3: 
                return Math.max(...fromPacket.subpackets.map((p) => this.compute(p)))
            case 4: 
                return fromPacket.value || -1
            case 5: 
                num0 = this.compute(fromPacket.subpackets[0])
                num1 = this.compute(fromPacket.subpackets[1])
                return (num0 > num1) ? 1 : 0
            case 6: 
                num0 = this.compute(fromPacket.subpackets[0])
                num1 = this.compute(fromPacket.subpackets[1])
                return (num0 < num1) ? 1 : 0
            case 7: 
                num0 = this.compute(fromPacket.subpackets[0])
                num1 = this.compute(fromPacket.subpackets[1])
                return (num0 == num1) ? 1 : 0
        }

        return -5
    }
}