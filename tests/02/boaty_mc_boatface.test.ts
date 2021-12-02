import { BoatyMcBoatface } from "../../02/boaty_mc_boatface";

test("Sub init", () => {
  const sub = new BoatyMcBoatface();
  
  expect(sub.horizontalPosition).toBe(0);
  expect(sub.depth).toBe(0);
});

test("Sub goes forward", () => {
  const sub = new BoatyMcBoatface();
  sub.forward(10);
  
  expect(sub.horizontalPosition).toBe(10);
  expect(sub.depth).toBe(0);
});

test("Sub goes up", () => {
  const sub = new BoatyMcBoatface();
  sub.up(10);
  
  expect(sub.horizontalPosition).toBe(0);
  expect(sub.depth).toBe(-10);
});

test("Sub goes down", () => {
  const sub = new BoatyMcBoatface();
  sub.down(10);
  
  expect(sub.horizontalPosition).toBe(0);
  expect(sub.depth).toBe(10);
});

test("Sub reposnds to string command: forward", () => {
  const sub = new BoatyMcBoatface();
  sub.command("forward", 10);
  
  expect(sub.horizontalPosition).toBe(10);
  expect(sub.depth).toBe(0);
});

test("Sub reposnds to string command: up", () => {
  const sub = new BoatyMcBoatface();
  sub.command("up", 10);
  
  expect(sub.horizontalPosition).toBe(0);
  expect(sub.depth).toBe(-10);
});

test("Sub reposnds to string command: down", () => {
  const sub = new BoatyMcBoatface();
  sub.command("down", 10);
  
  expect(sub.horizontalPosition).toBe(0);
  expect(sub.depth).toBe(10);
});