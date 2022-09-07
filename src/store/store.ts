import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../pages/dashboard/dashboardSlice";
import accountSlice from "./accountSlide";

import navigateLinkHeaderSlide from "./navigateSlide";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    account: accountSlice,
    navigateLinkHeader: navigateLinkHeaderSlide
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
