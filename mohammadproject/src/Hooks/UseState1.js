import { useState } from "react";
function UseState1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Mohammad");
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setName("Ahmed")}>UpdateName</button>
      <h1>{name}</h1>
    </>
  );
}
export default UseState1;
