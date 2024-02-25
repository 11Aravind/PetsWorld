
import { Link } from "react-router-dom";
import "./CSS/Login.css"
import { useRef } from "react";
import { useState } from "react";
export const Signup = () => {
  const [message, setMessage] = useState("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const showHideMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }
  const signUp = () => {
    if (password != confirmPassword) {
      showHideMessage("Enter same passsword");
    }
    else {
      const signupData = {
        "email": email,
        "password": password
      }
console.log(signupData);
    }

  }
  return (
    <div className="login-container">
      <div className="mx-auto col-10 col-md-8 col-lg-4 loginBox">
        {/* <form className="form-example" action="" method="post"> */}
        {/* <div className="login-logo">
            <img src="https://t4.ftcdn.net/jpg/07/15/16/29/240_F_715162989_1MUrcI1UKPnchkLmXN4JjIUKovm8poZs.jpg" alt="" />
          </div> */}
        <h4>Signup</h4>
        <div className="errorMsg">{message}</div>
        <div className="form-group">
          <label for="username">E-mail</label>
          <input
            type="text"
            className="form-control username"
            id="username"
            ref={email}
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control password"
            id="password"
            ref={password}
          />
        </div>
        <div className="form-group">
          <label for="cpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control password"
            id="cpassword"
            ref={confirmPassword}
          />
        </div>
        <small>
          Already have an Account ? <Link to="/login">Login</Link>
        </small>
        <button type="submit" className="btn btn-primary btn-customized mt-4 card-btn" onClick={signUp}>
          Signup
        </button>
        {/* </form> */}

      </div>
    </div>
  );
}

