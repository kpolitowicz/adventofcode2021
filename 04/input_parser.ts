import { GameOfBingo, BingoBoard } from "./bingo";

export class InputParser {
    parse(input: string): GameOfBingo {
        const lines = this.lines(input);
        const numbers = lines[0].split(',').map((s) => +s);

        const boardCount = (lines.length - 1) / 6;
        let boards: BingoBoard[] = [];
        for (let i = 0; i < boardCount; i++) {
            const startingLine = i * 6 + 2;
            boards.push(new BingoBoard(lines.slice(startingLine, startingLine + 5)))
        }
        return new GameOfBingo(numbers, boards);
    }

    // Read the input file's string, split along the lines, remove the last (empty) line
    lines(input: string): string[] {
        return input.split("\n").slice(0, -1);
    }
}