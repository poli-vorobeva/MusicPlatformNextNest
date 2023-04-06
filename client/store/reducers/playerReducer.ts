import { PlayerState } from '../../types/player';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { ITrack } from '../../types/track';

const initialState: PlayerState = {
  currentTime: 0,
  duration: 0,
  active: null,
  volume: 0,
  pause: true,
};
export const PlayerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPause(state: PlayerState, action: PayloadAction<null>) {
      this.state.pause = true;
    },
    setPlay(state: PlayerState, action: PayloadAction<null>) {
      this.state.pause = false;
    },
    setCurrentTime(state: PlayerState, action: PayloadAction<number>) {
      this.state.currentTime = action.payload;
    },
    setVolume(state: PlayerState, action: PayloadAction<number>) {
      this.state.volume = action.payload;
    },
    setDuration(state: PlayerState, action: PayloadAction<number>) {
      this.state.duration = action.payload;
    },
    setActive(state: PlayerState, action: PayloadAction<ITrack>) {
      this.state.active = action.payload;
      this.state.duration = 0;
      this.state.currentTime = 0;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setPause, setPlay, setActive, setCurrentTime, setDuration, setVolume } = PlayerSlice.actions;

export default PlayerSlice.reducer;