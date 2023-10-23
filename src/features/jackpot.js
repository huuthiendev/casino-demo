import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
};

export const fetchJackpots = createAsyncThunk('jackpot/fetchJackpots', async () => {
  const response = await axios.get(process.env.REACT_APP_JACKPOT_API);
  return response.data;
});

const jackpotSlice = createSlice({
  name: 'jackpot',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJackpots.fulfilled, (state, action) => void(state.value = action.payload));
  },
});

// Selectors
export const selectJackpotsData = (state) => state.jackpot.value;

export default jackpotSlice.reducer;
