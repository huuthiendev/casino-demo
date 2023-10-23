import { configureStore } from '@reduxjs/toolkit';

import gameReducer from './features/game';
import jackpotReducer from './features/jackpot';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    jackpot: jackpotReducer,
  },
});
