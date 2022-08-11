import { createStore } from "redux";
import reduce from "./Reduce";

const store = createStore(reduce);

export default store;
