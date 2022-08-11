const { Component } = require("react");

function Login() {
  return (
    <>
      <button>Login</button>
    </>
  );
}
function Logout() {
  return (
    <>
      <button>Logout</button>
    </>
  );
}
class ConditionRender extends Component {
  constructor() {
    super();
    this.state = {
      isLoged: false,
    };
  }
  render() {
    return <>{this.state.isLoged ? <Login /> : <Logout />}</>;
  }
}
export default ConditionRender;
