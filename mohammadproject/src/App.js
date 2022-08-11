import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Bootstrape/About";
import Contact from "./Bootstrape/Contact";
import Header from "./Bootstrape/Header";
import Login from "./Bootstrape/Login";
import Logout from "./Bootstrape/Logout";
import Navig from "./Bootstrape/HomeA";
import Products from "./Bootstrape/Products";
import Signup from "./Bootstrape/Signup";
import ClassComp from "./Components/classcomp";
import ClassCompConst from "./Components/classcompconst";
import ClassProps from "./Components/classprops";
import Garage from "./Components/compincomp";
import CompInComp from "./Components/compincomp";
import CompInFile from "./Components/compInfile";
import ConditionRender from "./Components/ConditionRander";
import FunctionComp from "./Components/FunctionComp";
import FunctionProps from "./Components/FunctionProps";
import StateUpdate from "./Components/StateUpdate";
import Onchange from "./Events/Onchange";
import Onclick from "./Events/Onclick";
import Onsumbit from "./Events/Onsubmit";
import Aa from "./Hooks/UseContext.js/A";
import UseMemo from "./Hooks/UseMemo";
import UseRef from "./Hooks/UseRef";
import UseState from "./Hooks/UseState";
import UseState1 from "./Hooks/UseState1";
import HomeA from "./Bootstrape/HomeA";
import Project1 from "./Project/Project1";
import Project2 from "./Project/Project2";
import Single from "./Bootstrape/Single";
import Demo from "./Redux/Demo";
import Demo1 from "./Redux/Demo1";
function App() {
  return (
    <div>
      {/* <CompInComp /> */}
      {/* <Garage /> */}
      {/* <CompInFile /> */}
      {/* <Onclick /> */}
      {/* <Onchange /> */}
      {/* <ConditionRender /> */}
      {/* <StateUpdate /> */}
      {/* <UseState1 /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <Aa /> */}
      {/* <Onsumbit /> */}
      {/* <CompInFile /> */}
      {/* <ClassCompConst /> */}
      {/* <FunctionComp /> */}
      {/* <FunctionProps
        name="Mohammad"
        lname="Patel"
        name1="Ahmed"
        Lname="Patel"
      /> */}
      {/* <ClassComp /> */}
      {/* <ClassProps name="Ahmed" lname="Patel" /> */}
      {/* <TypesExample /> */}
      {/* <Home />
      <About />
      <Products />
      <Contact />
      <Login />
      <Logout />
      <Signup /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeA />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/products/single/:id" element={<Single />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Demo />
      <Demo1 /> */}
    </div>
  );
}
export default App;
