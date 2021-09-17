import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "src/store/reducers";

export const store = configureStore({
  reducer: rootReducer,
});
