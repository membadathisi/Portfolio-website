import React from 'react';
import './SignIn.css';
//import { Link } from 'react-router-dom';
//import Icon from '@iconify/react';

function SignIn() {
  return (
    <section className="signin">
      <div className="box2">
        <div className="stuff">
          <h1>Sign In</h1>
          <br />
          <form className="FORM">
            <div className="inputBox">
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
              New Applicant? <a>Create An Account</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
