import React from "react";
import { useSelector } from 'react-redux';

import { selectNewGames } from '../features/game';
import GameContainer from '../components/GameContainer';

const NewGames = () => {
  const games = useSelector(selectNewGames);

  return <GameContainer games={games} isShowRibbon={false} />;
};

export default NewGames;