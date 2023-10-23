import React from "react";
import { useSelector } from 'react-redux';

import { selectPoker } from '../features/game';
import GameContainer from '../components/GameContainer';

const Poker = () => {
  const games = useSelector(selectPoker);

  return <GameContainer games={games} isShowRibbon={true} />;
};

export default Poker;