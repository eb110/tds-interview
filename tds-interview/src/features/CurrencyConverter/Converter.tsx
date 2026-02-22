import {
  useConvertMutation,
  useCurrenciesQuery,
} from "../../api/currencyBeaconApi";
import { Typography, Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { convertToCurrencies } from "../../utils/util";
import CurrencyDropDown from "../../components/CurrencyDropDown";
import { useState, type ChangeEvent } from "react";
import type { Currency } from "../../types/currency";

export default function Converter() {
  const { data, isLoading } = useCurrenciesQuery();

  const [convert] = useConvertMutation();

  const [quantity, setQuantity] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<Currency | null>(null);
  const [toCurrency, setToCurrency] = useState<Currency | null>(null);

  const convertCurrency = async () => {
    const { data } = await convert({
      from: fromCurrency!.code!,
      to: toCurrency!.code!,
      amount: quantity,
    });
    console.log("amount: ", data.response);
    setResult(data.response.value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = +event.currentTarget.value;

    if (value > 0) setQuantity(value);
  };

  const handleFromCurrency = (from: Currency): void => {
    console.log(from);
    setFromCurrency(from);
  };

  const handleToCurrency = (to: Currency): void => {
    console.log(to);
    setToCurrency(to);
  };

  if (isLoading) return <Typography>Loading basket...</Typography>;

  return (
    <Box display="flex" alignItems="center" flexDirection="column" p={2} m={2}>
      {data && (
        <CurrencyDropDown
          label="From Currency"
          currencies={convertToCurrencies(data)}
          transferCurrency={handleFromCurrency}
        />
      )}

      {data && (
        <CurrencyDropDown
          label="To Currency"
          currencies={convertToCurrencies(data)}
          transferCurrency={handleToCurrency}
        />
      )}

      <TextField
        sx={{ width: "60%" }}
        variant="outlined"
        type="number"
        label="From Currency Amount"
        value={quantity}
        onChange={handleInputChange}
      />

      <Button
        sx={{ m: 2, width: "25%" }}
        variant="contained"
        onClick={() => convertCurrency()}
        disabled={!fromCurrency || !toCurrency || quantity <= 0}
      >
        Convert
      </Button>

      <Typography variant="h5">Result</Typography>
      <Typography variant="h5">{result.toFixed(2)}</Typography>

      <Button
        sx={{ mt: 20, width: "25%" }}
        variant="contained"
        component={Link}
        to="/"
      >
        Home
      </Button>
    </Box>
  );
}
