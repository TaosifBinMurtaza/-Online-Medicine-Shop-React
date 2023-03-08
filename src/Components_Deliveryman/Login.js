import "./Css/myStyle.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//import axios from "axios";
import axiosConfig from "./Config/axiosConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate("");

  const handleForm = (event) => {
    event.preventDefault();
    const data = { email: email, logpassword: password };
    axiosConfig.post("deliveryman/login", data).then(
      (succ) => {
        localStorage.setItem("_authToken", succ.data.token);
        if (localStorage.getItem("_authToken") == "undefined") {
          navigate("/Deliveryman/Login");
          setError(succ.data.msg);
        } else {
          navigate("/Deliveryman/Dashboard");
        }
      },
      (err) => {
        setError(err.data.msg);
      }
    );
  };

  return (
    <div>
      <form className="container" onSubmit={handleForm}>
        <center>
          <h3 className="text-secondary">Log In</h3>
          <br />
          <b>
            <span className="text-danger"></span>
          </b>
        </center>
        <br />

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            value={email}
            className="form-control"
            name="email"
            placeholder="Enter E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="pasword">Password</label>
          <input
            type="password"
            value={password}
            className="form-control"
            name="logpassword"
            placeholder="Enter Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <center>
            <small className="text-danger">{error}</small>
          </center>
        </div>
        <br />
        <br />
        <center>
          <input
            name="submit"
            type="submit"
            value="LOGIN"
            className="btn btn-primary"
          />
          <br />
          <br />

          <Link to="/Deliveryman/Registration">
            Don't have an account yet? Sign Up
          </Link>
        </center>
      </form>
    </div>
  );
};
export default Login;
