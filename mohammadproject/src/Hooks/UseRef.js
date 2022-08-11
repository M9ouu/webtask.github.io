import { useRef } from "react";
function UseRef() {
  const InputData = useRef(null);
  const handleSubmit = () => {
    InputData.current.style.backgroundColor = "yellow";
    InputData.current.style.textColor = "white";
    InputData.current.id = "fmane";
  };
  return (
    <>
      <h1>Enter Name...</h1>
      <input type="text" ref={InputData} />
      <button onClick={handleSubmit}>Click</button>
    </>
  );
}
export default UseRef;
