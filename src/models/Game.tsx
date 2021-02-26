interface Game {
  players: Array<Player>;
  id: number;
  state: State;
  board: Board;
}

class TicTacToe implements Game {
  state: State;
  players: Player[];
  id: number;
  board: Board = new TicTacToeBoard();

  constructor(players: Player[]) {
    this.players = players;
    this.id = 1;
    this.state = State.pending;
    this.start();
  }

  private start() {
    this.state = State.start;
  }
}

enum State {
  start,
  play,
  end,
  pending,
}
