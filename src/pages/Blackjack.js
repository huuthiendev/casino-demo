import React from "react";
import { useSelector } from 'react-redux';

import { selectBlackjack } from '../features/game';
import GameContainer from '../components/GameContainer';

const Blackjack = () => {
  const games = useSelector(selectBlackjack);

  return <GameContainer games={games} isShowRibbon={true} />;
};

export default Blackjack;