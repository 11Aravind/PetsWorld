import { Link } from "react-router-dom";
import "./CSS/Login.css"
export const Login = () => {
  return (

        <div className="row">
          <div className="mx-auto col-10 col-md-8 col-lg-6">
            <form className="form-example" action="" method="post">
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
                <p className="description">
                A tutorial on how to align a "form" in Bootstrap 4 and 5.
              </p>

              <button type="submit" className="btn btn-primary btn-customized mt-4">
                Login
              </button>
            </form>

          </div>
        </div>
  );
}
