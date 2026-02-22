import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../App/store/store";
import { increment, decrement } from "./counterReducer";

export default function ContactPage() {
  const { data } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <Box display="flex" alignItems="center" flexDirection="column" p={2} m={2}>
      <Box>
        <Typography variant="body1">The data is {data}</Typography>
        <ButtonGroup>
          <Button onClick={() => dispatch(increment(1))} color="error">
            Increment
          </Button>
          <Button onClick={() => dispatch(decrement(1))} color="secondary">
            Decrement
          </Button>
        </ButtonGroup>
      </Box>

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
