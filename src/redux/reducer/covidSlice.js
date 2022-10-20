import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCountries: [],
};

const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    setCovidState: (state, action) => {
      state.allCountries = action.payload;
    },
  },
});
export const { setCovidState } = covidSlice.actions;
export default covidSlice.reducer;
