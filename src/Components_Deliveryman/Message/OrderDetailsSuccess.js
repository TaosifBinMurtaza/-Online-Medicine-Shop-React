import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OrderDetailsSuccess = () => {
  const navigate = useNavigate("");
  useEffect(() => {
    navigate("/Deliveryman/Dashboard");
  }, []);

  return (
    <center>
      <h1>Status is Updating...</h1>
    </center>
  );
};
export default OrderDetailsSuccess;
