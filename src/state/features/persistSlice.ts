import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type StretchVideoType =
  | "contain"
  | "fill"
  | "cover"
  | "none"
  | "scale-down";
export type ContentType = "videos" | "playlists";
export type VideoListType = "all";
interface settingsState {
  selectedTab: VideoListType;
  stretchVideoSetting: StretchVideoType;
  filterType: ContentType;
  playbackRate: number;
  showStats: boolean;
}

const initialState: settingsState = {
  selectedTab: "all",
  stretchVideoSetting: "contain",
  filterType: "videos",
  playbackRate: 1,
  showStats: true,
};

export const persistSlice = createSlice({
  name: "persist",
  initialState,
  reducers: {
    setHomePageSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
    setStretchVideoSetting: (state, action) => {
      state.stretchVideoSetting = action.payload;
    },
    setShowStats: (state, action) => {
      state.showStats = action.payload;
    },
    setReduxPlaybackRate: (state, action) => {
      state.playbackRate = action.payload;
    },
    changeFilterType: (state, action) => {
      state.filterType = action.payload;
    },
  },
});

export const {
  setHomePageSelectedTab,
  setReduxPlaybackRate,
  changeFilterType,
} = persistSlice.actions;

export default persistSlice.reducer;
