import React, { Component } from "react";
// eslint-disable-next-line
import Joi, { errors } from "joi-browser";

class Login extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required(),
    password: Joi.string().required(),
  };

  handleChange = (event) => {
    const account = this.state.account;
    account[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ account });
  };

  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.account, this.schema);
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    console.log(errors);

    //const { email, password } = this.state.account;

    //if (email.trim() === "") errors.username = "Email is required";
    //if (password.trim() === "") errors.password = "Password is required";

    // if errors exists, initialize state errors with errors otherwise empty object
    this.setState({ errors: errors || {} });
  };
  render() {
    console.log(this.state.errors);
    return (
      <div className="w-25 mt-5 mx-auto p-3">
        <form onSubmit={this.handleSubmit}>
          <h1 className="text-center font-weight-bold bg-success text-white p-1">
            Login
          </h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={this.state.account.email}
              onChange={this.handleChange}
              aria-describedby="emailHelp"
              autoFocus
            />
            {this.state.errors.email && (
              <div className="text-danger">{this.state.errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={this.state.account.password}
              onChange={this.handleChange}
            />
            {this.state.errors.password && (
              <div className="text-danger">{this.state.errors.password}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
