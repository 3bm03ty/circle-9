import { useContext } from "react";
import { counterContext } from "../contexts/counterContext";

export default function Feed() {
  const { counter } = useContext(counterContext);

  return (
    <div>
      <h1>Feed {counter}</h1>
    </div>
  );
}
