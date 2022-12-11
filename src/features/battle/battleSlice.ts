import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Spaceship } from '../spaceships/spaceshipsTypes';

// FIXME: Refactor with proper names
export interface BattleState {
  status: 'idle' | 'active';
  leftSpaceship: Spaceship | null
  rightSpaceship: Spaceship | null
}

const initialState: BattleState = {
  status: 'idle',
  leftSpaceship: null,
  rightSpaceship: null
}

export const battleSlice = createSlice({
  name: 'battle',
  initialState,
  // FIXME: Refactor
  reducers: {
    changeStatus: (state, action: PayloadAction<BattleState['status']>) => {
      state.status = action.payload
    },
    setLeftSpaceship: (state, action: PayloadAction<Spaceship>) => {
      state.leftSpaceship = action.payload
    },
    setRightSpaceship: (state, action: PayloadAction<Spaceship>) => {
      state.rightSpaceship = action.payload
    },
    modifyLeftSpaceship: (state, action: PayloadAction<Spaceship>) => {
      state.leftSpaceship = {
        ...state.leftSpaceship,
        ...action.payload
      }
    },
    modifyRightSpaceship: (state, action: PayloadAction<Spaceship>) => {
      state.rightSpaceship = {
        ...state.rightSpaceship,
        ...action.payload
      }
    },
  },
});

export const {
  changeStatus,
  setLeftSpaceship,
  setRightSpaceship,
  modifyLeftSpaceship,
  modifyRightSpaceship,
} = battleSlice.actions;

export default battleSlice.reducer;
