/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useCurrenciesQuery } from "../../api/currencyBeaconApi";
import type { Currency } from "../../types/currency";
import { useState } from "react";

export default function TestPage() {
  const { data, isLoading } = useCurrenciesQuery();

  const [currency, setCurrency] = useState<Currency[]>([]);

  if (isLoading) return <Typography>Loading basket...</Typography>;

  function showCurrencies() {
    const tempCurrency: Currency[] = data.response.map((x: any) => ({
      id: x.id,
      name: x.name,
    }));
    setCurrency(tempCurrency);
  }

  return (
    <Box display="flex" alignItems="center" flexDirection="column" p={2} m={2}>
      <Box>
        {currency.length > 0 &&
          currency.map((x) => (
            <Typography key={x.id}>
              {x.id} {x.name}
            </Typography>
          ))}
      </Box>
      <Button
        sx={{ m: 2, width: "25%" }}
        onClick={() => showCurrencies()}
        variant="contained"
      >
        Show Currencies
      </Button>
      <Button
        sx={{ m: 2, width: "25%" }}
        variant="contained"
        component={Link}
        to="/"
      >
        Home
      </Button>
    </Box>
  );
}
