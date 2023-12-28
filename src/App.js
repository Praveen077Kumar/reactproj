import React, { Component } from "react";
import Register from "./components/register";
import Greet from "./components/greet";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: false,
      name: null,
      email: null,
      password: null,
      showPass: false,
    };
  }

  registrationHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({ name, email, password, isRegistered: true });
  };

  showPasswordHandler = () => {
    this.setState({ showPass: !this.state.showPass });
  }

  render() {
    return (
      <div>
        {this.state.isRegistered ? (
          <Greet name={this.state.name} email={this.state.email} />
        ) : (
          <Register
            submit={this.registrationHandler}
            showpass={this.state.showPass}
            click={this.showPasswordHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
