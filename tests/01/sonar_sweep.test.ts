import { findNumberOfIncreases } from "../../01/sonar_sweep";

test("Simple findNumberOfIncreases", () => {
  const actual = findNumberOfIncreases([1,2,3,4,5]);
  expect(actual).toBe(4);
});

test("Example findNumberOfIncreases", () => {
  const actual = findNumberOfIncreases([
        199,
        200,
        208,
        210,
        200,
        207,
        240,
        269,
        260,
        263
    ]);
  expect(actual).toBe(7);
});