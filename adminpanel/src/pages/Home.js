import React from "react";
import { Button } from "bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";
import Header from "./Header";
import Contact from "./Contact";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <>
      <Sidebar />
      <Contact />
    </>
  );
}

export default Home;
