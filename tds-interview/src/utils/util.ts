/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Currency } from "../types/currency";

export function convertToCurrencies(data: any): Currency[] {
    const tempCurrency: Currency[] = data.response.map((x: any) => ({
        id: x.id,
        name: x.name,
        code: x.short_code
    }));
    return tempCurrency;
}