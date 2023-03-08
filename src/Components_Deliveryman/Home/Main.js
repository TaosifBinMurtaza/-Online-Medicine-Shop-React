import "../Css/myStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Main = () => {
  const navigate = useNavigate("");
  useEffect(() => {
    if (localStorage.getItem("_authToken") == "undefined") {
      navigate("/Deliveryman/Login");
    }
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};
export default Main;
