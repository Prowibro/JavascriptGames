import React from 'react';
import HomeCard from '../components/HomeCard';
import jeux from '../../assets/json/games.json';
import { Link } from 'react-router-dom';

const Home = () => {
  let games = jeux.games;
  return (
    <>
      <h1>ElectronGames</h1>
      {games.map((game) => {
        return (
          <HomeCard
            id={game.id}
            btnChildren={game.buttonLink.content}
            btnLinkTo={game.buttonLink.src}
          >
            <h2>{game.title}</h2>
            <Link to={game.buttonLink.src}>
              <img src={game.img.src} alt={game.img.alt} />
            </Link>
            <p>{game.description}</p>
          </HomeCard>
        );
      })}
    </>
  );
};

export default Home;
