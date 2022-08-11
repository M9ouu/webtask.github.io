import { createContext, useContext } from "react";
import { FirstName } from "./A";
export default function D() {
  const name = useContext(FirstName);
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}
