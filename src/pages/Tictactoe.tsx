import React from 'react';
import { Link } from 'react-router-dom';
import { pathNames } from '../App';
import Button from '../components/Button';
import { TicTacToe } from '../models/Game';
import { Player, TicTacToePlayer } from '../models/Player';
import _ from 'lodash';
import { isNotBlank } from '../models/HelperMethods';

const twoPlayers = (arr: Player[]): boolean => {
  return arr.length === 2;
};
let ticTacToeGame: TicTacToe;
let players: Player[] = [];

const IDINPUTNAMEPLAYER1 = 'namePlayer1';
const IDINPUTNAMEPLAYER2 = 'namePlayer2';

const Tictactoe = () => {
  // let player1 = 'X';
  // let player2 = 'O';

  if (twoPlayers(players)) {
    ticTacToeGame = new TicTacToe(players);
  }

  return (
    <>
      <h1>TicTacToe</h1>
      <div>
        <div>
          <h2>Player 1</h2>
          <label htmlFor={IDINPUTNAMEPLAYER1}>Name: </label>
          <input
            type="text"
            id={IDINPUTNAMEPLAYER1}
            name={IDINPUTNAMEPLAYER1}
            value="X"
          ></input>
        </div>
        <div>
          <h2>Player 2</h2>
          <label htmlFor={IDINPUTNAMEPLAYER2}>Name: </label>
          <input
            type="text"
            id={IDINPUTNAMEPLAYER2}
            name={IDINPUTNAMEPLAYER2}
            value="O"
          ></input>
        </div>
        <Button
          onClick={() => {
            let inputNamePlayer1: HTMLInputElement = document.getElementById(
              IDINPUTNAMEPLAYER1
            ) as HTMLInputElement;
            let inputNamePlayer2: HTMLInputElement = document.getElementById(
              IDINPUTNAMEPLAYER2
            ) as HTMLInputElement;
            let namePlayer1 = _.trim(inputNamePlayer1.value);
            let namePlayer2 = _.trim(inputNamePlayer2.value);
            // if () console.log('hi');
            if (
              // (namePlayer1) &
              isNotBlank(namePlayer1) &
              isNotBlank(namePlayer2) &
              (_.toLower(namePlayer1) != _.toLower(namePlayer2))
            ) {
              players.push(new TicTacToePlayer(namePlayer1, 'randomColor'));
              players.push(new TicTacToePlayer(namePlayer2, 'randomColor'));
            }
          }}
        />
      </div>
      <div className="c-ticTacToe__board">
        {ticTacToeGame != null
          ? ticTacToeGame.getBoard().map((value, index) => {
              return (
                <div
                  id={`c-ticTacToe__board__square-${index}`}
                  className="c-ticTacToe__board__square"
                ></div>
              );
            })
          : ''}
      </div>
      <Link to={pathNames.home}>
        <Button className="c-ticTacToe__home-btn">Go back to hompage</Button>
      </Link>
    </>
  );
};

export default Tictactoe;
