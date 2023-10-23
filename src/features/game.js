import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  top: [],
  new: [],
  slots: [],
  jackpots: [],
  live: [],
  blackjack: [],
  roulette: [],
  table: [],
  poker: [],
  others: [],
};

const filterGamesByCategories = (games) => {
  const gameData = {
    top: [],
    new: [],
    slots: [],
    jackpots: [],
    live: [],
    blackjack: [],
    roulette: [],
    table: [],
    poker: [],
    others: [],
  };

  for (let game of games) {
    const categories = game.categories;

    for (let category of categories) {
      if (initialState.hasOwnProperty(category)) {
        gameData[category].push(game);
      } else {
        gameData.others.push(game);
      }
    }
  }

  return gameData;
};

export const fetchGames = createAsyncThunk('game/fetchGames', async () => {
  const response = await axios.get(process.env.REACT_APP_GAME_API);
  return response.data;
});

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (state, action) => state = filterGamesByCategories(action.payload));
  },
});

// Selectors
export const selectTopGames = (state) => state.game.top;
export const selectNewGames = (state) => state.game.new;
export const selectSlots = (state) => state.game.slots;
export const selectJackpots = (state) => state.game.jackpots;
export const selectLive = (state) => state.game.live;
export const selectBlackjack = (state) => state.game.blackjack;
export const selectRoulette = (state) => state.game.roulette;
export const selectTable = (state) => state.game.table;
export const selectPoker = (state) => state.game.poker;
export const selectOthers = (state) => state.game.others;

export default gameSlice.reducer;
