import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <Box display="flex" alignItems="center" flexDirection="column" p={2} m={2}>
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
