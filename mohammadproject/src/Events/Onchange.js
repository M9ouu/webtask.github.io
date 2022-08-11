let { Component } = require("react");

class Onchange extends Component {
  constructor() {
    super();
    this.state = {
      name: "Enter Your Name In Input Box",
    };
  }
  render() {
    return (
      <>
        <h1>Hello {this.state.name}</h1>
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
      </>
    );
  }
}
export default Onchange;
