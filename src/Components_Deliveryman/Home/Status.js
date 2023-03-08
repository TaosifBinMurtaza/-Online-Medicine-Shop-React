import "../Css/myStyle.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosConfig from "../Config/axiosConfig";
import HomeNavigation from "../HomeNavigation/HomeNavigation";

const Status = () => {
  const [profile, setProfile] = useState({});
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    axiosConfig.get("deliveryman/profile/info").then(
      (rsp) => {
        setProfile(rsp.data);
        setStatus(profile.Status);
      },
      (er) => {}
    );
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      status: status,
    };

    axiosConfig.post("deliveryman/profile/status", data).then(
      (succ) => {
        setMsg(succ.data.msg);
      },
      (err) => {}
    );
  };
  return (
    <div>
      <HomeNavigation />
      <form method="post" onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <label htmlFor="name" className="fw-bold">
            Status:
          </label>
          <input
            type="text"
            value={profile.status}
            className="form-control"
            name="status"
            placeholder="Enter Name"
            readOnly
          />
          <small className="text-danger"></small>
        </div>
        <br />
        <small className="text-danger">{msg}</small>
        <br />
        <center>
          <input
            name="change_status"
            type="submit"
            value="Change"
            className="btn btn-primary"
          />
        </center>
      </form>
    </div>
  );
};
export default Status;
