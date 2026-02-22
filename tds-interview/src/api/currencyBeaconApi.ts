/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseApiQuery } from "./baseApi";
//import type { Currency } from "../types/currency";

//const key = import.meta.env.CURRENCYBEACON_KEY

export const currencyBeaconApi = createApi({
    reducerPath: 'currencyBeaconApi',
    baseQuery: baseApiQuery,
    endpoints: (builder) => ({
        currencies: builder.query<any, void>({
            //query: () => ({ url: `currencies?api_key=${key}` })
            query: () => ({ url: `currencies?api_key=vgjdv5E3BuIgKJ7JHr50Qm9EQL5i1IEb` })
        }),
        convert: builder.mutation<any, { from: string, to: string, amount: number }>({
            query: ({ from, to, amount }) => {
                return {
                    url: `convert?api_key=vgjdv5E3BuIgKJ7JHr50Qm9EQL5i1IEb&from=${from}&to=${to}&amount=${amount}`,
                    method: 'GET'
                }
            }
        })
    })
})

export const { useCurrenciesQuery, useConvertMutation } = currencyBeaconApi