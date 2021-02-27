import { getAllIndexes } from './HelperMethods';

export interface Board {
  getCurrent(): Array<number>;
  moves(): Array<number>;
}

export class TicTacToeBoard implements Board {
  board: Array<number>;

  constructor() {
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  public moves(): Array<number> {
    return getAllIndexes(this.board, 0);
  }

  public getCurrent(): Array<number> {
    return this.board;
  }
}
