import React from "react";
class ClassProps extends React.Component {
  render() {
    return (
      <div>
        <h1>My Name is : {this.props.name}</h1>
        <h2>My Lastname : {this.props.lname}</h2>
      </div>
    );
  }
}
export default ClassProps;
