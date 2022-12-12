import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// FIXME: Refactor with proper names
export interface BattleState {
  status: 'idle' | 'active';
  leftSpaceshipId: string
  rightSpaceshipId: string
}

const initialState: BattleState = {
  status: 'idle',
  leftSpaceshipId: '',
  rightSpaceshipId: '',
}

export const battleSlice = createSlice({
  name: 'battle',
  initialState,
  // FIXME: Refactor
  reducers: {
    changeStatus: (state, action: PayloadAction<BattleState['status']>) => {
      state.status = action.payload
    },
    setLeftSpaceshipId: (state, action: PayloadAction<string>) => {
      state.leftSpaceshipId = action.payload
    },
    setRightSpaceshipId: (state, action: PayloadAction<string>) => {
      state.rightSpaceshipId = action.payload
    },
  },
});

export const {
  changeStatus,
  setLeftSpaceshipId,
  setRightSpaceshipId,
} = battleSlice.actions;

export default battleSlice.reducer;
