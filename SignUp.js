import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <section className="signup">
      <div className="box2">
        <div className="stuff">
          <h1>Create Account</h1>
          <br />
          <form className="FORM">
            <div className="inputBox">
              <input placeholder="username" type="text"></input>
              <br />

              <input placeholder="email" type="email" required></input>
              <br />

              <div className="Passwewe">
                <input placeholder="password" type="password" required></input>
              </div>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <br />
            <div className="links">
              Already have an account? <a>Login</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
