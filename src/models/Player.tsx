export interface Player {
  name: String;
  id: number;
  color: String;
  time: Date;
}

export class TicTacToePlayer implements Player {
  name: String;
  id: number;
  color: String;
  time: Date;
  // internal id of zo

  constructor(name: String, color: String) {
    this.id = 0;
    this.name = name;
    this.color = color;
    this.time = new Date();
  }
}
