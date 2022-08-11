import React from "react";
import Form from "react-bootstrap/Form";

export default function Search() {
  return (
    <Form className="search">
      <input type="text" placeholder="Search..." className="input" />
      <button type="submit" className="button">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </Form>
  );
}
