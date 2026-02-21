import type { Example } from "../types/example";

export type Props = {
  example: Example;
  stateFunction: () => void;
};

export default function TestChild({ example, stateFunction }: Props) {
  return (
    <>
      <div>{example.id}</div>
      <button onClick={() => stateFunction()}>CLICK</button>
    </>
  );
}
