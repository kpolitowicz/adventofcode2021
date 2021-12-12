import { InputParser } from "../../11/input_parser";
import { OctopusSim } from "../../11/octopi";

test("Performs one step of simulation", () => {
    const input = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526
`

    const sim = new InputParser().parse(input);
    sim.step();

    expect(sim.numAt(0,0)).toBe(6);
    expect(sim.numAt(9,9)).toBe(7);
    expect(sim.flashCount).toBe(0);
});

test("Performs one step of simulation with counting flashes", () => {
    const input = `8807476555
5089087054
8597889608
8485769600
8700908800
6600088989
6800005943
0000007456
9000000876
8700006848
`

    const sim = new InputParser().parse(input);
    sim.step();
    // sim.debug();

    expect(sim.flashCount).toBe(45);
});


test("Counts flashes", () => {
    const input = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526
`

    const sim = new InputParser().parse(input);
    sim.step();
    expect(sim.flashCount).toBe(0);
    sim.step();
    expect(sim.flashCount).toBe(35);
    sim.step();
    expect(sim.flashCount).toBe(35+45);
    sim.step();
    sim.step();
    sim.step();
    sim.step();
    sim.step();
    sim.step();
    sim.step();
    expect(sim.flashCount).toBe(204);
});

test("Registers flashes", () => {
    const input = `11111
19991
19191
19991
11111
`

    const sim = new InputParser().parse(input);
    sim.step();

    expect(sim.numAt(0,0)).toBe(3);
    expect(sim.numAt(0,2)).toBe(5);
    expect(sim.numAt(1,1)).toBe(0);
    expect(sim.numAt(2,2)).toBe(0);
    expect(sim.flashCount).toBe(9);
});

test("increases the energy level of all adjacent octopuses", () => {
    const sim = new OctopusSim();
    sim.addLine([1,1,1]);
    sim.addLine([1,10,1]);
    sim.addLine([1,1,1]);

    sim.flashAt(1,1);

    expect(sim.numAt(0,0)).toBe(2);
    expect(sim.numAt(0,1)).toBe(2);
    expect(sim.numAt(0,2)).toBe(2);

    expect(sim.numAt(1,0)).toBe(2);
    expect(sim.numAt(1,1)).toBe(-1);
    expect(sim.numAt(1,2)).toBe(2);

    expect(sim.numAt(2,0)).toBe(2);
    expect(sim.numAt(2,1)).toBe(2);
    expect(sim.numAt(2,2)).toBe(2);
});