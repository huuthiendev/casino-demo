import React from "react";
import { useSelector } from 'react-redux';

import { selectRoulette } from '../features/game';
import GameContainer from '../components/GameContainer';

const Roulette = () => {
  const games = useSelector(selectRoulette);

  return <GameContainer games={games} isShowRibbon={true} />;
};

export default Roulette;