import { InputParser } from "./input_parser";
import { GameOfBingo } from "./bingo";

export function firstAnswer(input: string): number {
    const parser = new InputParser();
    const game = parser.parse(input);

    for (let number of game.numbers) {
        if (game.drawNext()) {
            break;
        }
    }
    if (game.winningBoard != undefined) {
        return game.lastNumber() * game.winningBoard.score();
    }

    return 0;
}

export function secondAnswer(input: string): number {
    const parser = new InputParser();
    const game = parser.parse(input);

    for (let number of game.numbers) {
        if (game.drawNext()) {
            if (game.boards.length == 1) {
                break;
            }
            game.boards = game.boards.filter((b) => !b.bingo);
        }
    }
    
    if (game.winningBoard != undefined) {
        return game.lastNumber() * game.boards[0].score();
    }

    return 0;
}