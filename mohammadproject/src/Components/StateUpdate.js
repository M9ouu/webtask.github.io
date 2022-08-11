const { Component } = require("react");
class StateUpdate extends Component {
  constructor() {
    super();
    this.state = {
      isLoged: true,
    };
  }
  render() {
    return (
      <>
        {this.state.isLoged ? (
          <button onClick={() => this.setState({ isLoged: false })}>
            Login
          </button>
        ) : (
          <button onClick={() => this.setState({ isLoged: true })}>
            Logout
          </button>
        )}
      </>
    );
  }
}
export default StateUpdate;
