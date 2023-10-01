import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";
import { BaseApi } from "./api/baseApi";
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
