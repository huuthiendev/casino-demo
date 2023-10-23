import React from 'react';
import { useSelector } from 'react-redux';

import { selectTopGames } from '../features/game';
import GameContainer from '../components/GameContainer';


const TopGames = () => {
  const games = useSelector(selectTopGames);

  return <GameContainer games={games} isShowRibbon={false} />;
};

export default TopGames;
