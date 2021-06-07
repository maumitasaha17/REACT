import React, { Component } from "react";

class Register extends Component {
  state = {
    user: {
      name: "",
      email: "",
      mobileNo: "",
      password: "",
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
  handleChange = (event) => {
    const user = this.state.user;
    user[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ user });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="mt-5 mx-auto w-25">
          <h1 className="text-center font-weight-bold bg-success text-white p-2">
            Register
          </h1>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              value={this.state.user.fullName}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.user.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobileNo" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="mobileNo"
              name="mobileNo"
              onChange={this.handleChange}
              value={this.state.user.mobileNo}
            />
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
              onChange={this.handleChange}
              value={this.state.user.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Register;