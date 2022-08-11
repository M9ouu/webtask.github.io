import { useState } from "react";
function UseState() {
  const [isLoged, setState] = useState(true);
  return (
    <>
      {isLoged && isLoged ? (
        <button onClick={() => setState(false)}>Login</button>
      ) : (
        <button onClick={() => setState(true)}>Logout</button>
      )}
    </>
  );
}
export default UseState;
