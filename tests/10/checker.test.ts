import { findIllegalCharIn, findIncompleteChunkFrom } from "../../10/checker";

test("finds illegal char in a chunk", () => {
    const input = `{([(<{}[<>[]}>{[]{[(<()>`;

    const actual = findIllegalCharIn(input);
    expect(actual).toBe('}');
});

test("ignores incomplete chunk", () => {
    const input = `[({(<(())[]>[[{[]{<()<>>`;

    const actual = findIllegalCharIn(input);
    expect(actual).toBe(null);
});

test("finds incompletness in a chunk", () => {
    const input = `[({(<(())[]>[[{[]{<()<>>`;

    const actual = findIncompleteChunkFrom(input);
    expect(actual).toBe('{{[[({([');
});

test("ignores currupted chunk", () => {
    const input = `{([(<{}[<>[]}>{[]{[(<()>`;

    const actual = findIncompleteChunkFrom(input);
    expect(actual).toBe(null);
});