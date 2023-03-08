import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";

import Main from "./Home/Main";
import Home from "./Home/Home";
import OrderHistory from "./Home/OrderHistory";
import Profile from "./Home/Profile";
import ChangePassword from "./Home/ChangePassword";
import Logout from "./Home/Logout";
import HomeNavigation from "./HomeNavigation/HomeNavigation";
import OrderDetails from "./Home/OrderDetails";
import OrderDetailsSuccess from "./Message/OrderDetailsSuccess";
import Status from "./Home/Status";
import ChangePicture from "./Home/ChangePicture";

const Index_Deliveryman = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Deliveryman/Login" element={<Login />} />
          <Route path="/Deliveryman/Registration" element={<Registration />} />
          <Route path="/Deliveryman/Dashboard" element={<Main />} />
          <Route path="/Deliveryman/Home" element={<Home />} />
          <Route path="/Deliveryman/OrderHistory" element={<OrderHistory />} />
          <Route path="/Deliveryman/Profile" element={<Profile />} />
          <Route path="/Deliveryman/Security" element={<ChangePassword />} />
          <Route path="/Deliveryman/Status" element={<Status />} />
          <Route path="/Deliveryman/logout" element={<Logout />} />
          <Route path="/OrderDetails/:id" element={<OrderDetails />} />
          <Route
            path="/Deliveryman/Profile/Picture"
            element={<ChangePicture />}
          />
          <Route
            path="/orderDetails/update"
            element={<OrderDetailsSuccess />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Index_Deliveryman;
