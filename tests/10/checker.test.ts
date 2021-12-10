import { findIllegalCharIn } from "../../10/checker";

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