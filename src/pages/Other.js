import React from "react";
import { useSelector } from 'react-redux';

import { selectOthers } from '../features/game';
import GameContainer from '../components/GameContainer';

const Other = () => {
  const games = useSelector(selectOthers);

  return <GameContainer games={games} isShowRibbon={true} />;
};

export default Other;