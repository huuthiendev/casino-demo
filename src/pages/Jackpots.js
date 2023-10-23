import React from "react";
import { useSelector } from 'react-redux';

import { selectJackpots } from '../features/game';
import GameContainer from '../components/GameContainer';

const Jackpots = () => {
  const games = useSelector(selectJackpots);

  return <GameContainer games={games} isShowRibbon={true} />;
};

export default Jackpots;