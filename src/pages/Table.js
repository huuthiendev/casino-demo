import React from "react";
import { useSelector } from 'react-redux';

import { selectTable } from '../features/game';
import GameContainer from '../components/GameContainer';

const Table = () => {
  const games = useSelector(selectTable);

  return <GameContainer games={games} isShowRibbon={true} />;
};

export default Table;