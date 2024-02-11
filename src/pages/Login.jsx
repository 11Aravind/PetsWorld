import { Link } from "react-router-dom";
import "./CSS/Login.css"
export const Login = () => {
  return (

    <div className="login-container">
      <div className="mx-auto col-10 col-md-8 col-lg-4 loginBox">
        <form className="form-example" action="" method="post">
          {/* <div className="login-logo">
            <img src="https://t4.ftcdn.net/jpg/07/15/16/29/240_F_715162989_1MUrcI1UKPnchkLmXN4JjIUKovm8poZs.jpg" alt="" />
          </div> */}
          <h4>Login</h4>

          <div className="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              className="form-control username"
              id="username"
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control password"
              id="password"
            />
          </div>
          <small>
            A tutorial on how to align a "form" in Bootstrap 4 and 5.
          </small>

          <button type="submit" className="btn btn-primary btn-customized mt-4 card-btn">
            Login
          </button>
        </form>

      </div>
    </div>
  );
}
