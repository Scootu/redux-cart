import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isShowApp: false,
    notification: null,
  },
  reducers: {
    toggle(state) {
      state.isShowApp = !state.isShowApp;
    },
    showNotification(state, action) {
      state.notification = action.payload;
    },
  },
});
export const uiSliceAction = uiSlice.actions;
export default uiSlice;
