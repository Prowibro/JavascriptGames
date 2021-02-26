import { getAllIndexes } from './HelperMethods';

//class
interface Board {}

class TicTacToeBoard implements Board {
  squares: Array<number>;

  constructor() {
    this.squares = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  public checkMoves(): Array<number> {
    return getAllIndexes(this.squares, 0);
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
