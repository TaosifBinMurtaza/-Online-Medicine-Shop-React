import "../Css/myStyle.css";
import { useState, useEffect } from "react";
import axiosConfig from "../Config/axiosConfig";
import HomeNavigation from "../HomeNavigation/HomeNavigation";

const Profile = () => {
  const [error, setErr] = useState({});
  const [msg, setMsg] = useState("");
  const [value, setValues] = useState({
    delman_name: "",
    delman_email: "",
    delman_mob: "",
    delman_dob: "",
    delman_nid: "",
    delman_add: "",
    image: "",
  });

  const handleChange = (event) => {
    setValues({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    axiosConfig.get("deliveryman/profile/info").then(
      (rsp) => {
        setValues(rsp.data);
      },
      (er) => {}
    );
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      delman_name: value.delman_name,
      delman_mob: value.delman_mob,
      delman_dob: value.delman_dob,
      delman_add: value.delman_add,
    };

    axiosConfig.post("deliveryman/profile/update", data).then(
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
      <HomeNavigation />
      <form className="container" onSubmit={handleSubmit}>
        <center>
          <h3 className="text-secondary">Profile</h3>
        </center>

        <center>
          <img
            name="image"
            src={`http://localhost:8000/storage/ProfilePicture/${value.image}`}
            width="120"
            height="100"
            alt="image"
          />
          <a href="/Deliveryman/Profile/Picture">Change Picture</a>
        </center>

        <div className="form-group">
          <label htmlFor="name" className="fw-bold">
            Name:
          </label>
          <input
            type="text"
            value={value.delman_name}
            className="form-control"
            name="delman_name"
            onChange={handleChange}
          />
        </div>
        <small className="text-danger">
          {error.delman_name ? error.delman_name[0] : ""}
        </small>

        <div className="form-group">
          <label htnlfor="email" className="fw-bold">
            E-mail:
          </label>
          <input
            type="email"
            value={value.delman_email}
            className="form-control"
            name="delman_email"
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="mob" className="fw-bold">
            Mobile Number:
          </label>
          <input
            type="text"
            value={value.delman_mob}
            className="form-control"
            name="delman_mob"
            onChange={handleChange}
          />
        </div>
        <small className="text-danger">
          {error.delman_mob ? error.delman_mob[0] : ""}
        </small>

        <div className="form-group">
          <label htmlFor="name" className="fw-bold">
            Date of Birth:
          </label>
          <input
            type="date"
            className="form-control"
            value={value.delman_dob}
            name="delman_dob"
            onChange={handleChange}
          />
        </div>
        <small className="text-danger">
          {error.delman_dob ? error.delman_dob[0] : ""}
        </small>

        <div className="form-group">
          <label htmlFor="nid" className="fw-bold">
            NID
          </label>
          <input
            type="text"
            className="form-control"
            value={value.delman_nid}
            name="delman_nid"
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="Address" className="fw-bold">
            Address
          </label>
          <input
            type="text"
            value={value.delman_add}
            className="form-control"
            name="delman_add"
            onChange={handleChange}
          />
        </div>
        <small className="text-danger">
          {error.delman_add ? error.delman_add[0] : ""}
        </small>
        <br />
        <center>
          <small className="text-danger">{msg}</small>
        </center>
        <br />
        <center>
          <input
            name="submit"
            type="submit"
            value="Update Profile"
            className="btn btn-primary"
          />
        </center>
      </form>
    </div>
  );
};
export default Profile;
