import "./Css/myStyle.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosConfig from "./Config/axiosConfig";

const Registration = () => {
  const navigate = useNavigate("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [dob, setDob] = useState("");
  const [nid, setNid] = useState("");
  const [address, setAddress] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [error, setErr] = useState({});
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      delman_name: name,
      delman_email: email,
      delman_mob: mob,
      delman_dob: dob,
      delman_nid: nid,
      delman_add: address,
      password: pass,
      conf_password: cpass,
    };

    axiosConfig.post("deliveryman/registration", data).then(
      (succ) => {
        setMsg(succ.data.msg);
      },
      (err) => {
        setErr(err.response.data);
      }
    );
  };

  return (
    <div>
      <button className="btn backBtn" onClick={() => navigate(-1)}>
        {" "}
        Back{" "}
      </button>
      <form className="container" onSubmit={handleSubmit}>
        <center>
          <h3 className="text-secondary">Registration</h3>
          <b>
            <span className="text-danger"></span>
          </b>
        </center>

        <div className="form-group">
          <label htmlFor="name" className="fw-bold">
            Name:
          </label>
          <input
            type="text"
            value={name}
            className="form-control"
            name="delman_name"
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <small className="text-danger">
            {error.delman_name ? error.delman_name[0] : ""}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="fw-bold">
            E-mail:
          </label>
          <input
            type="email"
            value={email}
            className="form-control"
            name="delman_email"
            placeholder="Enter E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <small className="text-danger">
            {error.delman_email ? error.delman_email[0] : ""}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="mob" className="fw-bold">
            Mobile Number:
          </label>
          <input
            type="text"
            value={mob}
            className="form-control"
            name="delman_mob"
            placeholder="Enter Mobile Number"
            onChange={(e) => {
              setMob(e.target.value);
            }}
          />
          <small className="text-danger">
            {error.delman_mob ? error.delman_mob[0] : ""}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="name" className="fw-bold">
            Date of Birth:
          </label>
          <input
            type="date"
            className="form-control"
            value={dob}
            name="delman_dob"
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
          <small className="text-danger">
            {error.delman_dob ? error.delman_dob[0] : ""}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="nid" className="fw-bold">
            NID
          </label>
          <input
            type="text"
            className="form-control"
            value={nid}
            name="delman_nid"
            placeholder="Enter NID"
            onChange={(e) => {
              setNid(e.target.value);
            }}
          />
          <small className="text-danger">
            {error.delman_nid ? error.delman_nid[0] : ""}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="Address" className="fw-bold">
            Address
          </label>
          <input
            type="text"
            value={address}
            className="form-control"
            name="delman_add"
            placeholder="Enter Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <small className="text-danger">
            {error.delman_add ? error.delman_add[0] : ""}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="pasword" className="fw-bold">
            Password
          </label>
          <input
            type="password"
            value={pass}
            className="form-control"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <small className="text-danger">
            {error.password ? error.password[0] : ""}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="pasword" className="fw-bold">
            Confirm Password
          </label>
          <input
            type="password"
            value={cpass}
            className="form-control"
            name="conf_password"
            placeholder="Enter Password"
            onChange={(e) => {
              setCpass(e.target.value);
            }}
          />
          <small className="text-danger">
            {error.conf_password ? error.conf_password[0] : ""}
          </small>
        </div>
        <center>
          <small className="text-danger">{msg}</small>
        </center>
        <br />
        <center>
          <input
            name="submit"
            type="submit"
            value="Registration"
            className="btn btn-primary"
          />
        </center>
      </form>
    </div>
  );
};
export default Registration;
