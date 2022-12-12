import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store'
import { Spaceship } from './spaceshipsTypes';

export interface SpaceshipsState {
  entities: Spaceship[]
}

const initialState: SpaceshipsState = {
  entities: []
}

export const spaceshipsSlice = createSlice({
  name: 'spaceships',
  initialState,
  reducers: {
    addSpaceship: (state, action: PayloadAction<Spaceship>) => { 
      state.entities.push(action.payload)
    },
    removeSpaceship: (state, action: PayloadAction<string>) => { 
      state.entities = state.entities.filter(e => e.id !== action.payload)
    },
    modifySpaceship: (state, action: PayloadAction<Spaceship>) => { 
      state.entities = state.entities.map((e) => {
        if (e.id !== action.payload.id) {
          return e
        }
        return {
          ...e,
          ...action.payload
        }
      })
    },
  },
});

export const {
  addSpaceship, 
  removeSpaceship,
  modifySpaceship
} = spaceshipsSlice.actions;

/* Selectors */
export const selectSpaceshipById = (state: RootState, id: string) => state.spaceships.entities.find(e => e.id === id)

export default spaceshipsSlice.reducer;
