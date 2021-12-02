import { WeirderSub } from "../../02/weirder_sub";

test("Sub init", () => {
  const sub = new WeirderSub();
  
  expect(sub.horizontalPosition).toBe(0);
  expect(sub.depth).toBe(0);
  expect(sub.aim).toBe(0);
});

test("Up decreases aim", () => {
  const sub = new WeirderSub();
  sub.up(10);
  
  expect(sub.horizontalPosition).toBe(0);
  expect(sub.depth).toBe(0);
  expect(sub.aim).toBe(-10);
});

test("Down increases aim", () => {
  const sub = new WeirderSub();
  sub.down(10);
  
  expect(sub.horizontalPosition).toBe(0);
  expect(sub.depth).toBe(0);
  expect(sub.aim).toBe(10);
});

test("Forward goes forward", () => {
  const sub = new WeirderSub();
  sub.forward(10);
  
  expect(sub.horizontalPosition).toBe(10);
  expect(sub.depth).toBe(0);
});

test("Forward aims at depth", () => {
  const sub = new WeirderSub();
  sub.down(5);
  sub.forward(8);
  
  expect(sub.horizontalPosition).toBe(8);
  expect(sub.depth).toBe(40);
  expect(sub.aim).toBe(5);
});