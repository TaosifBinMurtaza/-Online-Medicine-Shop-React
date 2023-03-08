import "../Css/myStyle.css";

import { useState, useEffect } from "react";
import axiosConfig from "../Config/axiosConfig";
import HomeNavigation from "../HomeNavigation/HomeNavigation";

const ChangePicture = () => {
  const [msg, setMsg] = useState("");
  const [pic, setPic] = useState(null);

  const handleForm = (event) => {
    event.preventDefault();
    var data = new FormData();
    data.append("file", pic, pic.name);
    axiosConfig.post("deliveryman/profile/picture", data).then(
      (rsp) => {
        setMsg(rsp.data.msg);
      },
      (er) => {}
    );
  };
  return (
    <div>
      <HomeNavigation />
      <form className="container" method="post" onSubmit={handleForm}>
        <center>
          <h3 className="text-secondary">Change Profile Picture</h3>
          <br />
        </center>

        <center>
          <div className="form-group">
            <input
              type="file"
              name="picture"
              className="form-control"
              onChange={(e) => {
                setPic(e.target.files[0]);
              }}
            />
          </div>
          <br />
          <br />
          <center>
            <small className="text-danger">{msg}</small>
          </center>
          <br />
          <br />
          <center>
            <input name="submit" type="submit" className="btn btn-primary" />
          </center>
        </center>
      </form>
    </div>
  );
};
export default ChangePicture;
