import { SmokeMap } from "../../09/smoke_map";

test("Marks a basin", () => {
    const map = new SmokeMap();
    map.addLine('2199943210');
    map.addLine('3987894921');
    map.addLine('9856789892');
    map.addLine('8767896789');
    map.addLine('9899965678');

    const size = map.markBasinFrom(0, 0)

    expect(map.basinAt(0,0)).toBe(true);
    expect(map.basinAt(0,1)).toBe(true);
    expect(map.basinAt(1,0)).toBe(true);
    expect(size).toStrictEqual(3);
});

test("Marks all basins", () => {
    const map = new SmokeMap();
    map.addLine('2199943210');
    map.addLine('3987894921');
    map.addLine('9856789892');
    map.addLine('8767896789');
    map.addLine('9899965678');

    map.markAllBasins();

    expect(map.basinSizes).toStrictEqual([3, 9, 14, 9]);
});