import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HullSize, HullType } from './spaceshipsTypes';

export interface SpaceshipState {
  id: string
  // Hull Design
  hullSize: HullSize
  hullType: HullType
  // HP
  hitPoints: number
  maxHitPoints: number
  // AP
  armorPoints: number
  maxArmorPoints: number
  // SP
  shieldPoints: number
  maxShieldPoints: number
}

export const initialSpaceshipState: SpaceshipState = {
  id: '',
  hullSize: HullSize.Tiny,
  hullType: HullType.Shuttle,
  hitPoints: 100,
  maxHitPoints: 100,
  armorPoints: 0,
  maxArmorPoints: 0,
  shieldPoints: 0,
  maxShieldPoints: 0
}

export interface SpaceshipsState {
  entities: SpaceshipState[]
}

const initialState: SpaceshipsState = {
  entities: []
}

export const spaceshipsSlice = createSlice({
  name: 'spaceships',
  initialState,
  reducers: {
    addSpaceship: (state, action: PayloadAction<SpaceshipState>) => { 
      console.log(state, action)
      state.entities.push(action.payload)
    },
    removeSpaceship: (state, action: PayloadAction<string>) => { 
      console.log(state, action)
      state.entities = state.entities.filter(e => e.id !== action.payload)
    },
    modifySpaceship: (state, action: PayloadAction<SpaceshipState>) => { 
      console.log(state, action)
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

export default spaceshipsSlice.reducer;
