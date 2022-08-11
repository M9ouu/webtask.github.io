import React, { Component } from "react";
class ClassCompConst extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Mohammad",
      Lastname: "Patel",
    };
  }
  render() {
    return (
      <div>
        <h1>My Name is : {this.state.name}</h1>
        <h1>My Lastname is : {this.state.Lastname}</h1>
      </div>
    );
  }
}
export default ClassCompConst;
