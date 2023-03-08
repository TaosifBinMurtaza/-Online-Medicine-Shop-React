import "../Css/myStyle.css";

import { useState, useEffect } from "react";
import axiosConfig from "../Config/axiosConfig";
import HomeNavigation from "../HomeNavigation/HomeNavigation";

const ChangePassword = () => {
  const [pass, setPass] = useState("");
  const [newpass, setNewPass] = useState("");
  const [confpass, setConfPass] = useState("");
  const [error, setError] = useState({});
  const [msg, setMsg] = useState("");

  const handleForm = (event) => {
    event.preventDefault();

    const data = {
      current_password: pass,
      new_password: newpass,
      conf_password: confpass,
    };

    axiosConfig.post("deliveryman/security", data).then(
      (succ) => {
        setMsg(succ.data.msg);
      },
      (err) => {
        setError(err.response.data);
      }
    );
  };
  return (
    <div>
      <HomeNavigation />
      <form className="container" method="post" onSubmit={handleForm}>
        <center>
          <h3 className="text-secondary">Change Password</h3>
          <br />
        </center>

        <div className="form-group">
          <label htmlFor="current_pasword" className="fw-bold">
            Enter Current Password
          </label>
          <input
            type="password"
            value={pass}
            className="form-control"
            name="current_password"
            placeholder="Enter Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <small className="text-danger">
            {error.current_password ? error.current_password[0] : ""}
          </small>
          <br />
        </div>

        <div className="form-group">
          <label htmlFor="pasword" className="fw-bold">
            Enter New Password
          </label>
          <input
            type="password"
            value={newpass}
            className="form-control"
            name="new_password"
            placeholder="Enter Password"
            onChange={(e) => {
              setNewPass(e.target.value);
            }}
          />
          <small className="text-danger">
            {error.new_password ? error.new_password[0] : ""}
          </small>
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="pasword" className="fw-bold">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="conf_password"
            placeholder="Enter Password"
            value={confpass}
            onChange={(e) => {
              setConfPass(e.target.value);
            }}
          />
          <small className="text-danger">
            {error.conf_password ? error.conf_password[0] : ""}
          </small>
          <br />
        </div>
        <center>
          <small className="text-danger">{msg}</small>
        </center>
        <br />
        <center>
          <input
            name="submit"
            type="submit"
            value="Confirm Password"
            className="btn btn-primary"
          />
        </center>
      </form>
    </div>
  );
};
export default ChangePassword;
