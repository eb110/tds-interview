import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../../features/Contact/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { currencyBeaconApi } from "../../api/currencyBeaconApi";
import { uiSlice } from "../../api/uiSlice";

export const store = configureStore({
    reducer: {
        [currencyBeaconApi.reducerPath]: currencyBeaconApi.reducer,
        counter: counterSlice.reducer,
        ui: uiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyBeaconApi.middleware)
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()