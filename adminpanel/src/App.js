import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Addproducts from "./pages/Addproducts";
import Contact from "./pages/Contact";
import EditProduct from "./pages/EditProduct";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sidebar from "./pages/Sidebar";
import Viewpro from "./pages/Viewpro";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "js/sb-admin-2.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div id="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/manageproducts" element={<Addproducts />}></Route>
            <Route path="/viewproducts" element={<Viewpro />}></Route>
            <Route path="/loginpage" element={<Login />}></Route>
            <Route path="/editproducts/:id" element={<EditProduct />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
