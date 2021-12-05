import { BingoBoard, GameOfBingo } from "../../04/bingo";

test("Game draws the next number and moves the cursor", () => {
    const game = new GameOfBingo([1], []);

    game.drawNext();
    
    expect(game.nextNumberIndex).toBe(1);
});

test("Game marks drawn number on the boards", () => {
    const board = new BingoBoard(['1 2 3 4 5','6 7 8 9 10','11 12 13 14 15','16 17 18 19 20','21 22 23 24 25'])
    const game = new GameOfBingo([1], [board]);

    game.drawNext();
    
    expect(game.boards[0].isMarkedAt(1, 1)).toBe(true);
    expect(game.boards[0].isMarkedAt(1, 2)).toBe(false);
});

test("Game draw reports horizontal bingo", () => {
    const board = new BingoBoard(['1 2 3 4 5','6 7 8 9 10','11 12 13 14 15','16 17 18 19 20','21 22 23 24 25'])
    const game = new GameOfBingo([1,2,3,4,5], [board]);

    expect(game.drawNext()).toBe(false);
    expect(game.drawNext()).toBe(false);
    expect(game.drawNext()).toBe(false);
    expect(game.drawNext()).toBe(false);
    expect(game.drawNext()).toBe(true);
});

test("Game draw reports vertical bingo", () => {
    const board = new BingoBoard(['1 2 3 4 5','6 7 8 9 10','11 12 13 14 15','16 17 18 19 20','21 22 23 24 25'])
    const game = new GameOfBingo([3,23,13,18,8], [board]);

    expect(game.drawNext()).toBe(false);
    expect(game.drawNext()).toBe(false);
    expect(game.drawNext()).toBe(false);
    expect(game.drawNext()).toBe(false);
    expect(game.drawNext()).toBe(true);
});