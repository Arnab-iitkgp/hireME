import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice";

export const jobStore = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});
