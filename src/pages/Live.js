import React from "react";
import { useSelector } from 'react-redux';

import { selectLive } from '../features/game';
import GameContainer from '../components/GameContainer';

const Live = () => {
  const games = useSelector(selectLive);

  return <GameContainer games={games} isShowRibbon={true} />;
};

export default Live;