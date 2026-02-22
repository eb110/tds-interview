import { fetchBaseQuery, type BaseQueryApi, type FetchArgs } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "./uiSlice";

const customBaseQuery = fetchBaseQuery({
    //baseUrl: import.meta.env.VITE_API_URL,
    baseUrl: 'https://api.currencybeacon.com/v1/',
    //cookies
    //credentials: 'include'
});

export const baseApiQuery = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
    //start loading
    //update the store state
    api.dispatch(startLoading());
    //async call - fetch of the api data - isLoading = true
    const result = await customBaseQuery(args, api, extraOptions);
    //stop loading
    //update the store state
    api.dispatch(stopLoading());

    return result;
}