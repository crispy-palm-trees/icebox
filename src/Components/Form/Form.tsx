import React from "react";

import "./Form.scss";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  };

  handleChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="app-form">
        <h1>Say hello!</h1>
        <form>
          <input
            className="input-field"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={e => this.handleChange(e)}
          />
          <input
            className="input-field"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={e => this.handleChange(e)}
          />
          <input
            className="input-field"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />

          <textarea
            className="input-field"
            placeholder="Message"
            name="message"
            value={this.state.message}
            onChange={e => this.handleChange(e)}
          />

          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
