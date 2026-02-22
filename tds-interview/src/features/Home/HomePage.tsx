import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Box display="flex" alignItems="center" flexDirection="column" p={2} m={2}>
      <Button
        sx={{ m: 2, width: "25%" }}
        variant="contained"
        component={Link}
        to="/converter"
      >
        Currency converter
      </Button>
      <Button
        sx={{ m: 2, width: "25%" }}
        variant="contained"
        component={Link}
        to="/test"
      >
        Test Page
      </Button>
      <Button
        sx={{ m: 2, width: "25%" }}
        variant="contained"
        component={Link}
        to="/contact"
      >
        Contact Page
      </Button>
    </Box>
  );
}
