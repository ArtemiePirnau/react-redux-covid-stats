import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../reducer/covidSlice";
export const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
});
