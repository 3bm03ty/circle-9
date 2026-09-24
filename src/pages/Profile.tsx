import { useContext } from "react";
import { counterContext } from "../contexts/counterContext";

export default function Profile() {
  
  const { counter, setCounter } = useContext(counterContext);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Profile {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}
