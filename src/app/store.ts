import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameReducer from '../features/game/gameSlice';
import mainMenuReducer from '../features/main-menu/mainMenuSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    mainMenu: mainMenuReducer
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
