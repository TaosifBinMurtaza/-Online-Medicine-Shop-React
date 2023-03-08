import { useNavigate } from "react-router-dom";
import axiosConfig from "../Config/axiosConfig";

const Logout = () => {
  const token = localStorage.getItem("_authToken");
  const navigate = useNavigate("");

  const data = { token: token };
  axiosConfig.post("deliveryman/logout", data).then(
    (succ) => {
      navigate("/Deliveryman/Login");
    },
    (err) => {}
  );
  return (
    <center>
      <h1>Logging out....</h1>
    </center>
  );
};
export default Logout;
