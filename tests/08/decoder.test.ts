import { Decoder } from "../../08/decoder";

test("Decodes one entry into a number", () => {
    const decoder = new Decoder();
    const signalPatterns = ['acedgfb', 'cdfbe', 'gcdfa', 'fbcad', 'dab', 'cefabd', 'cdfgeb', 'eafb', 'cagedb', 'ab'];
    const outputDigits = ['cdfeb', 'fcadb', 'cdfeb', 'cdbaf'];

    const actual = decoder.decode(signalPatterns, outputDigits);
    expect(actual).toBe(5353);
});

test("Finds easy digits", () => {
    const decoder = new Decoder();
    const signalPatterns = ['acedgfb', 'cdfbe', 'gcdfa', 'fbcad', 'dab', 'cefabd', 'cdfgeb', 'eafb', 'cagedb', 'ab'];

    const actual = decoder.findEasyDigits(signalPatterns);
    expect(actual[1]).toStrictEqual(['a', 'b']);
    expect(actual[4]).toStrictEqual(['a', 'b', 'e', 'f']);
    expect(actual[7]).toStrictEqual(['a', 'b', 'd']);
    expect(actual[8]).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
});

test("Finds 6, 9, 0", () => {
    const decoder = new Decoder();
    const signalPatterns = ['acedgfb', 'cdfbe', 'gcdfa', 'fbcad', 'dab', 'cefabd', 'cdfgeb', 'eafb', 'cagedb', 'ab'];
    let resultSoFar = new Array(10);
    resultSoFar[1] = ['a', 'b']; 
    resultSoFar[7] = ['a', 'b', 'd']; 
    resultSoFar[4] = ['a', 'b', 'e', 'f']; 
    resultSoFar[8] = ['a', 'b', 'c', 'd', 'e', 'f', 'g']; 

    const actual = decoder.findSixSegmentDigits(signalPatterns, resultSoFar);
    expect(actual[0]).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'g']);
    expect(actual[6]).toStrictEqual(['b', 'c', 'd', 'e', 'f', 'g']);
    expect(actual[9]).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f']);
});

test("Finds 2, 3, 5", () => {
    const decoder = new Decoder();
    const signalPatterns = ['acedgfb', 'cdfbe', 'gcdfa', 'fbcad', 'dab', 'cefabd', 'cdfgeb', 'eafb', 'cagedb', 'ab'];
    let resultSoFar = new Array(10);
    resultSoFar[0] = ['a', 'b', 'c', 'd', 'e', 'g']; 
    resultSoFar[1] = ['a', 'b']; 
    resultSoFar[4] = ['a', 'b', 'e', 'f']; 
    resultSoFar[6] = ['b', 'c', 'd', 'e', 'f', 'g']; 
    resultSoFar[7] = ['a', 'b', 'd']; 
    resultSoFar[8] = ['a', 'b', 'c', 'd', 'e', 'f', 'g']; 
    resultSoFar[9] = ['a', 'b', 'c', 'd', 'e', 'f']; 

    const actual = decoder.findFiveSegmentDigits(signalPatterns, resultSoFar);
    expect(actual[2]).toStrictEqual(['a', 'c', 'd', 'f', 'g']);
    expect(actual[3]).toStrictEqual(['a', 'b', 'c', 'd', 'f']);
    expect(actual[5]).toStrictEqual(['b', 'c', 'd', 'e', 'f']);
});

test("Decodes output digits", () => {
    const decoder = new Decoder();
    const outputDigits = ['cdfeb', 'fcadb', 'cdfeb', 'cdbaf'];
    let resultSoFar = new Array(10);
    resultSoFar[0] = ['a', 'b', 'c', 'd', 'e', 'g']; 
    resultSoFar[1] = ['a', 'b']; 
    resultSoFar[2] = ['a', 'c', 'd', 'f', 'g']; 
    resultSoFar[3] = ['a', 'b', 'c', 'd', 'f']; 
    resultSoFar[4] = ['a', 'b', 'e', 'f']; 
    resultSoFar[5] = ['b', 'c', 'd', 'e', 'f']; 
    resultSoFar[6] = ['b', 'c', 'd', 'e', 'f', 'g']; 
    resultSoFar[7] = ['a', 'b', 'd']; 
    resultSoFar[8] = ['a', 'b', 'c', 'd', 'e', 'f', 'g']; 
    resultSoFar[9] = ['a', 'b', 'c', 'd', 'e', 'f']; 

    const actual = decoder.decodeOutputDigits(outputDigits, resultSoFar);
    expect(actual).toStrictEqual([5, 3, 5, 3]);
});