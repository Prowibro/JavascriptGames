import { getAllIndexes } from './HelperMethods';

//class
interface Board {}

class TicTacToeBoard implements Board {
  squares: Array<number>;

  constructor() {
    this.squares = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  public findMoves(): Array<number> {
    return getAllIndexes(this.squares, 0);
  }

  private checkWin(): boolean {
    for (let i = 1; i < 3; i++) {
      // horizontaal i * 3
      if (
        this.squares[i + (i - 1) * 3] == this.squares[i + (i - 1) * 3 + 1] &&
        this.squares[i + (i - 1) * 3] == this.squares[i + (i - 1) * 3 + 2]
      ) {
        return true;
      }
      // verticaal i + 3
      if (
        this.squares[i] == this.squares[i + 3] &&
        this.squares[i] == this.squares[i + 6]
      ) {
        return true;
      }
    }
    return false;
  }

  private isDraw(): boolean {
    return !this.findMoves().length;
  }

  public isEnd(): boolean {
    if (this.checkWin() || this.isDraw()) {
      return true;
    }

    return false;
  }
}

/*
no two values in the same square
only be able to select one square per "round"
each person has their own value
if one person has 3 in a row (dia, hor or ver) that person wins and the game ends
if all squares are filled with no winners a draw will be declared and game ends
after every round the "starting position" is changed
scores are kept track off

*/
