import { VentLine, VentMap } from "../../05/vents";

test("Ignore vent that is not vertical nor horizontal", () => {
    let map = new VentMap(1, 1);
    map.add(new VentLine(0,1,1,0));
    
    expect(map.at(0,0)).toBe(0);
    expect(map.at(0,1)).toBe(0);
    expect(map.at(1,0)).toBe(0);
    expect(map.at(1,1)).toBe(0);
});

test("Adds vent to the map", () => {
    let map = new VentMap(9, 9);
    map.add(new VentLine(5,1,5,3));
    
    expect(map.at(5,0)).toBe(0);
    expect(map.at(5,1)).toBe(1);
    expect(map.at(5,2)).toBe(1);
    expect(map.at(5,3)).toBe(1);
    expect(map.at(5,4)).toBe(0);
});

test("Adds horizontalvent to the map", () => {
    let map = new VentMap(9, 9);
    map.addWithDiagonal(new VentLine(5,1,5,3));
    
    expect(map.at(5,0)).toBe(0);
    expect(map.at(5,1)).toBe(1);
    expect(map.at(5,2)).toBe(1);
    expect(map.at(5,3)).toBe(1);
    expect(map.at(5,4)).toBe(0);
});

test("Adds 45-degree vents to the map 1", () => {
    let map = new VentMap(2, 2);
    map.addWithDiagonal(new VentLine(0,0,2,2));
    
    expect(map.at(0,0)).toBe(1);
    expect(map.at(1,1)).toBe(1);
    expect(map.at(2,2)).toBe(1);
});

test("Adds 45-degree vents to the map 2", () => {
    let map = new VentMap(2, 2);
    map.addWithDiagonal(new VentLine(2,2,0,0));
    
    expect(map.at(0,0)).toBe(1);
    expect(map.at(1,1)).toBe(1);
    expect(map.at(2,2)).toBe(1);
});

test("Adds 45-degree vents to the map 3", () => {
    let map = new VentMap(2, 2);
    map.addWithDiagonal(new VentLine(2,0,0,2));
    
    expect(map.at(0,2)).toBe(1);
    expect(map.at(1,1)).toBe(1);
    expect(map.at(2,0)).toBe(1);
});

test("Adds 45-degree vents to the map 4", () => {
    let map = new VentMap(2, 2);
    map.addWithDiagonal(new VentLine(0,2,2,0));
    
    expect(map.at(0,2)).toBe(1);
    expect(map.at(1,1)).toBe(1);
    expect(map.at(2,0)).toBe(1);
});