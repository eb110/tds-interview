import { useState } from "react";
import type { AnotherExample, Example } from "../types/example";
import TestChild from "./TestChild";

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
    <>
      <div>Test</div>
      <div>Test Child</div>
      <TestChild example={examples} stateFunction={stateMachine} />
      {boolState ? <div>This is true</div> : <div>This is false</div>}
    </>
  );
}
