import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import type { Currency } from "../types/currency";

export type Props = {
  label: string;
  currencies: Currency[];
  transferCurrency: (currency: Currency) => void;
};

export default function CurrencyDropDown({
  label,
  currencies,
  transferCurrency,
}: Props) {
  const [currency, setCurrency] = useState<Currency | null>(null);

  const handleCurrencyChange = (event: SelectChangeEvent) => {
    const currencyName = event.target.value as string;
    const currencyTemp = currencies.find((x) => x.name === currencyName)!;
    setCurrency(currencyTemp);
    transferCurrency(currencyTemp);
  };

  return (
    <Box m={2} sx={{ width: "60%" }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={currency ? currency.name : ""}
          label={label}
          onChange={handleCurrencyChange}
        >
          {currencies
            .sort(function (a, b) {
              return a.name > b.name ? 1 : -1;
            })
            .map((x) => {
              return (
                <MenuItem key={x.id} value={x.name}>
                  {x.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Box>
  );
}
