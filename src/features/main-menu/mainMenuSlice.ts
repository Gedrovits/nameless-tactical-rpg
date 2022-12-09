import { createSlice } from '@reduxjs/toolkit';

export interface MainMenuState {
  selected: 'title' | 'startGame' | 'continueGame';
}

const initialState: MainMenuState = {
  selected: 'title',
};

export const mainMenuSlice = createSlice({
  name: 'mainMenu',
  initialState,
  reducers: {
    title: (state) => {
      state.selected = 'title';
    },
    newGame: (state) => {
      state.selected = 'startGame';
    },
    continueGame: (state) => {
      state.selected = 'continueGame';
    },
  }
});

export const { title, newGame, continueGame } = mainMenuSlice.actions;

export default mainMenuSlice.reducer;
