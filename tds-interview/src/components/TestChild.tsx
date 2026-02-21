import { Box, Button, Typography } from "@mui/material";
import type { Example } from "../types/example";

export type Props = {
  example: Example;
  stateFunction: () => void;
};

export default function TestChild({ example, stateFunction }: Props) {
  return (
    <Box>
      <Typography variant="h6">This is Child Component</Typography>
      {example.anotherExamples.map((x, i) => (
        <div key={i}>
          <div>
            {x.brand} side {x.side}
          </div>
        </div>
      ))}
      <Button variant="outlined" onClick={() => stateFunction()}>
        CLICK
      </Button>
    </Box>
  );
}
