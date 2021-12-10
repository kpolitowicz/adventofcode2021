export function findIllegalCharIn(chunk: string): string | null {
    let stack: string[] = [];
    let illegalChar = null;
    for (let i = 0; i < chunk.length; i++) {
        const c = chunk.charAt(i);
        if (c == '(' || c == '[' || c == '{' || c == '<') {
            // just put it on the stack
            stack.unshift(c);
        } else {
            if ((c == ')' && stack[0] == '(') || (c == ']' && stack[0] == '[') || (c == '}' && stack[0] == '{') || (c == '>' && stack[0] == '<')) {
                // all good, just remove from stack
                stack.shift();
            } else {
                // illegal character
                illegalChar = c;
                break;
            }
        }
    }

    return illegalChar;
}

export function findIllegalChars(chunks: string[]): string[] {
    let illegalChars: string[] = [];
    for (let chunk of chunks) {
        const c = findIllegalCharIn(chunk);
        if (c != null) {
            illegalChars.push(c);
        }
    }
    return illegalChars;
}

export function calcSyntaxScore(illegalChars: string[]): number {
    const scores: { [key: string]: number } = {
        ')': 3,
        ']': 57,
        '}': 1197,
        '>': 25137
    };
    let sum = 0;
    for (let c of illegalChars) {
        const score = scores[c];
        if (score != undefined) {
            sum += score;
        }
    }
    return sum;
}
