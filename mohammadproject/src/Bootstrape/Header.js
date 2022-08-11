import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Form from "react-bootstrap/Form";
import style from "../Css/header.css";
import Search from "./Search";
export default function Header() {
  const [products, SetProduct] = useState([]);
  const [user, setUser] = useState("");
  const [query, setQuery] = useState("");

  let logo = {
    fontSize: "30px",
    fontWeight: 700,
    color: "rgb(227, 224, 224)",
  };
  const getUser = async () => {
    const result = products.filter((u) =>
      u.pname.toLowerCase().startsWith(query.toLowerCase())
    );
    setUser(result);
    console.log(getUser);
  };
  return (
    <Navbar bg="dark" variant="dark" className="pt-3 pb-3 navbaar">
      <div>
        <Navbar.Brand href="#home" style={logo}>
          Navbar
        </Navbar.Brand>
      </div>
      <div>
        <Nav className="me-auto">
          <Search />
          <LinkContainer to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link href="#features">About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/products">
            <Nav.Link href="#pricing">Products</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link href="#pricing">
              <i className="fa-solid fa-user"></i>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Nav.Link href="#pricing">
              <i className="fa-solid fa-user-plus"></i>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/logout">
            <Nav.Link href="#pricing">
              <i className="fa-solid fa-right-from-bracket"></i>
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <div className="icons">
          <LinkContainer to="/login">
            <Nav.Link href="#pricing">
              <i className="fa-solid fa-user"></i>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Nav.Link href="#pricing">
              <i className="fa-solid fa-user-plus"></i>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="logout">
            <Nav.Link href="#pricing">
              <i className="fa-solid fa-right-from-bracket"></i>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/">
            <Nav.Link href="#">
              <i class="fa-solid fa-bars"></i>
            </Nav.Link>
          </LinkContainer>
        </div>
      </div>
    </Navbar>
  );
}
