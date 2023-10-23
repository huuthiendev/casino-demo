import React from "react";
import { useSelector } from 'react-redux';

import { selectSlots } from '../features/game';
import GameContainer from '../components/GameContainer';

const Slots = () => {
  const games = useSelector(selectSlots);

  return <GameContainer games={games} isShowRibbon={true} />;
};

export default Slots;