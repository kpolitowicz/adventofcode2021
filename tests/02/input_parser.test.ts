import { Command, InputParser } from "../../02/input_parser";

test("Command init", () => {
  const command = new Command("forward", 10);
  
  expect(command.cmd).toBe("forward");
  expect(command.x).toBe(10);
});

test("Parses input into lines", () => {
    const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2
`
    const parser = new InputParser();
    const lines = parser.lines(input);
    
    expect(lines.length).toBe(6);
    expect(lines[lines.length - 1]).toBe("forward 2");
});

test("Parses lines into commands", () => {
    const lines = ["forward 5", "down 8"];
    const parser = new InputParser();
    const commands = parser.commands(lines);
    
    expect(commands.length).toBe(2);
    expect(commands[0].cmd).toBe("forward");
    expect(commands[0].x).toBe(5);
});
