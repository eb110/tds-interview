import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
