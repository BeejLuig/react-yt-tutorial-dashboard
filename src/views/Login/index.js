import React from 'react';

const Login = () => (
  <section className="section">
    <div className="container">
      <div>
        <h1 className="title">Login</h1>
      </div>
      <br />
      <form>
        <div className="field">
          <label class="label">Username</label>
          <p className="control">
            <input className="input" type="text" placeholder="Username"/>
          </p>
        </div>
        <div className="field">
          <label class="label">Password</label>
          <p className="control">
            <input className="input" type="password" placeholder="Password" />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  </section>
)

export default Login;
