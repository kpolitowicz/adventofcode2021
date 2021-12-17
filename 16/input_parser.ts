export class InputParser {
    parse(input: string): string {
        const numHex = this.lines(input)[0]
        let result = ''
        for (let i = 0; i < numHex.length; i++) {
            const dec = parseInt(numHex.charAt(i), 16)
            result += this.padWithZeroes((dec >>> 0).toString(2))
        }
        return result
    }

    // Read the input file's string, split along the lines, remove the last (empty) line
    lines(input: string): string[] {
        return input.split("\n").slice(0, -1)
    }

    padWithZeroes(n: string, len = 4) {
        if (n.length == 1) {
            return `000${n}`
        } else if (n.length == 2) {
            return `00${n}`
        } else if (n.length == 3) {
            return `0${n}`
        } else {
            return n
        }
    }
}