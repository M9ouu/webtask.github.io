let { Component } = require("react");

class Onsumbit extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  render() {
    let handleupdate = (e) => {
      e.preventDefault();
      console.log(this.state.name);
    };
    return (
      <>
        {/* <h1>Hello</h1> */}
        <form method="post" onSubmit={handleupdate}>
          <h1>Hello {this.state.name}</h1>
          <input
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input type="submit" />
        </form>
      </>
    );
  }
}
export default Onsumbit;
