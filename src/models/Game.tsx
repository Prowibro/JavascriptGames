import { Board, TicTacToeBoard } from './Board';
import { Player } from './Player';

interface Game {
  players: Array<Player>;
  id: number;
  state: State;
  board: Board;
}

export class TicTacToe implements Game {
  state: State;
  players: Player[];
  id: number;
  board: Board;

  constructor(players: Player[]) {
    this.players = players;
    this.id = 1;
    this.state = State.pending;
    this.board = new TicTacToeBoard();
    this.start();
  }

  private start() {
    this.state = State.start;
  }

  private checkWin(): boolean {
    for (let i = 1; i < 3; i++) {
      if (
        this.board.getCurrent()[i + (i - 1) * 3 - 1] ==
          this.board.getCurrent()[i + (i - 1) * 3 + 1 - 1] &&
        this.board.getCurrent()[i + (i - 1) * 3 - 1] ==
          this.board.getCurrent()[i + (i - 1) * 3 + 2 - 1]
      ) {
        return true;
      }
      if (
        this.board.getCurrent()[i - 1] == this.board.getCurrent()[i + 3 - 1] &&
        this.board.getCurrent()[i - 1] == this.board.getCurrent()[i + 6 - 1]
      ) {
        return true;
      }
    }
    return false;
  }

  private isDraw(): boolean {
    return !this.board.moves().length;
  }

  public isEnd(): boolean {
    if (this.checkWin() || this.isDraw()) {
      return true;
    }

    return false;
  }

  public getBoard(): Array<number> {
    return this.board.getCurrent();
  }
}

enum State {
  start,
  play,
  end,
  pending,
}
