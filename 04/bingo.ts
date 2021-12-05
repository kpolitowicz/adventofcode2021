export class BingoBoard {
   board: number[] = [];
   marks: boolean[] = new Array(25);
   bingo = false;

   constructor(input: string[]) {
       for (let line of input) {
           const numbers = line.split(/\s+/).map((s) => +s);
           this.board.push(...numbers);
       }
       for( let i = 0; i < 25; i++) {
           this.marks[i] = false;
       }
   }

   numberAt(x: number, y: number): number {
       const idx = (x - 1) * 5 + (y - 1)
       return this.board[idx];
   }

   isMarkedAt(x: number, y: number): boolean {
       const idx = (x - 1) * 5 + (y - 1)
       return this.marks[idx];
   }

   draw(number: number): boolean {
       const idx = this.board.indexOf(number);

       if (idx != undefined) {
           this.marks[idx] = true;
           this.bingo = this.isBingo(idx);
           return this.bingo;
       }

       return false;
   }

   isBingo(lastIdx: number): boolean {
       const x = Math.floor(lastIdx / 5) + 1;
       const y = lastIdx % 5 + 1;

       // check for vertical bingo
       let bingo = true;
       for (let xi = 1; xi <= 5; xi++) {
          if (!this.isMarkedAt(xi, y))  {
              bingo = false;
          }
       }
       if (bingo) {
           return true;
       }

       // check for horizontal bingo
       bingo = true;
       for (let yi = 1; yi <= 5; yi++) {
          if (!this.isMarkedAt(x, yi))  {
              bingo = false;
          }
       }
       
       return bingo;
   }

   score(): number {
       let sum = 0;
       for (let i = 0; i < 25; i++) {
           if (!this.marks[i]) {
               sum += this.board[i];
           }
       }

       return sum;
   }
}

export class GameOfBingo {
    numbers: number[];
    boards: BingoBoard[];
    nextNumberIndex = 0;
    winningBoard: BingoBoard | null;

    constructor(numbers: number[], boards: BingoBoard[]) {
        this.numbers = numbers;
        this.boards = boards;
        this.winningBoard = null;
    }

    drawNext(): boolean {
        const nextNumber = this.numbers[this.nextNumberIndex]
        for (let board of this.boards) {
            if (board.draw(nextNumber)) {
                this.winningBoard = board;
            }
        }
        this.nextNumberIndex++;
        return (this.winningBoard != undefined);
    }

    lastNumber(): number {
        return this.numbers[this.nextNumberIndex - 1];
    }
}