import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import UserSlice from "./user";

export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
