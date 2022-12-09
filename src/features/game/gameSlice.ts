import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface GameState {
  status: 'idle' | 'loading';
}

const initialState: GameState = {
  status: 'idle',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    idle: (state) => {
      state.status = 'idle';
    },
    loading: (state) => {
      state.status = 'loading';
    },
  }
});

export const { idle, loading } = gameSlice.actions;

export const selectStatus = (state: RootState) => state.game.status;

export default gameSlice.reducer;
