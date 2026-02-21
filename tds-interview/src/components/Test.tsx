import { useState } from "react";
import type { AnotherExample, Example } from "../types/example";
import TestChild from "./TestChild";
import { Container, Typography } from "@mui/material";

const anothers: AnotherExample[] = [
  { side: 22, brand: "klf" },
  { side: 44, brand: "omd" },
];

const examples: Example = { id: 1, name: "dodo", anotherExamples: anothers };

export default function Test() {
  const [boolState, setBoolState] = useState<boolean>(true);

  const stateMachine = () => {
    setBoolState((prev) => !prev);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h5">This is Parent Component</Typography>
      {boolState ? <div>This is true</div> : <div>This is false</div>}
      <TestChild example={examples} stateFunction={stateMachine} />
    </Container>
  );
}
