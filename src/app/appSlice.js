const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  documentInfo: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {

  },
});

export const {  } = appSlice.actions;

export default appSlice.reducer;
