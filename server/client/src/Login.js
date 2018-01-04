import React, { Component } from 'react';

import emblem from './images/rrc_emblem.jpg';

class Login extends Component {
  render() {
    return (
      <form className="jumbotron container">

        <div className="text-center mb-4">
          <img src={emblem} style={{ height: 300, width: 300, marginBottom: 20 }}/>
          <h2 style={{ margin: "0 auto" }}>Login Form</h2>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            placeholder=""
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-secondary mb-2"
          >
            Submit
          </button>
          <p className="text-muted">
            Contact your local redcross organization to sign up as a volunteer
          </p>
        </div>

      </form>
    )
  }
}

export default Login;
