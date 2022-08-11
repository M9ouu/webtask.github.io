import { createContext } from "react";
import B from "./B";
const FirstName = createContext();
function Aa() {
  return (
    <>
      <FirstName.Provider value="Mohammad">
        <B />
      </FirstName.Provider>
    </>
  );
}
export default Aa;
export { FirstName };
