import { createContext, useContext } from "react";
import C from "./C";
import { FirstName } from "./A";
export default function B() {
  const name = useContext(FirstName);
  return (
    <>
      <h1>{name}</h1>
      <C />
    </>
  );
}
