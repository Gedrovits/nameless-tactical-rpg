import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameReducer from '../features/game/gameSlice';
import mainMenuReducer from '../features/main-menu/mainMenuSlice';
import spaceshipsReducer from '../features/spaceships/spaceshipsSlice';
import battleReducer from '../features/battle/battleSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    mainMenu: mainMenuReducer,
    spaceships: spaceshipsReducer,
    battle: battleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
