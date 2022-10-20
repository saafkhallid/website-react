import React from "react";

const Login = () => {
  return (
    <div className=" section-login d-flex justify-content-center">
      <form>
        <h1 className="text-center">Login</h1>

        <div className="form-group mb-3">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group mb-3">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="text-center  mb-3">
          <button
            type="submit"
            className="font-weight-bold px-4 py-2  btn text-dark mx-auto btn-warning"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
