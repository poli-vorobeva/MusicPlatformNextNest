import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { PlayerSlice } from './reducers/playerReducer';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      'player': PlayerSlice.reducer,
    },
    devTools: true,
  });
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  AppState,
  unknown,
  Action>;
export const wrapper = createWrapper<AppStore>(makeStore);