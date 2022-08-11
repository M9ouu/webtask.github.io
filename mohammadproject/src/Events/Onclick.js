let { Component } = require("react");

class Onclick extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mohammad",
    };
  }
  render() {
    const UpdateHandle = () => {
      this.setState({ name: "Ahmed" });
    };
    return (
      <>
        <h1>My Name is {this.state.name}</h1>
        <button onClick={UpdateHandle}>Click</button>
      </>
    );
  }
}
export default Onclick;
