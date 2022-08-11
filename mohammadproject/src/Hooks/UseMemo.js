import { useMemo, useState } from "react";
function UseMemo() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const isEven = useMemo(() => {
    for (var i = 0; i < 1000000000; i++) {}
    if (one % 2 === 0) {
      return one;
    }
  }, [one]);
  return (
    <>
      <h1>UseMemo</h1>
      <button onClick={() => setOne(one + 1)}>{one}</button>
      {isEven ? "Even" : "odd"}
      <button onClick={() => setTwo(two - 1)}>{two}</button>
    </>
  );
}
export default UseMemo;
