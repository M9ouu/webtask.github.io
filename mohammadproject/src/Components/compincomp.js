import React from "react";
import ReactDOM from "react-dom/client";

class Car extends React.Component {
  render() {
    return <h1>I am a Mohammad!</h1>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h2>Who lives in my Car?</h2>
        <Car />
      </div>
    );
  }
}

export default Garage;
