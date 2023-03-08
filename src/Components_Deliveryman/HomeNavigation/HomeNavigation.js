import "../Css/myStyle.css";
import { useState, useEffect } from "react";
import axiosConfig from "../Config/axiosConfig";

const HomeNavigation = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    axiosConfig.get("deliveryman/profile/info").then(
      (rsp) => {
        setProfile(rsp.data);
      },
      (er) => {}
    );
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid fw-bold fs-4">
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/Deliveryman/Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Deliveryman/OrderHistory">
                  Order History
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {profile.delman_name}
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/Deliveryman/Profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Deliveryman/Status">
                      Status: {profile.status}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Deliveryman/Security">
                      Change Password
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-danger"
                      href="/Deliveryman/logout"
                    >
                      Log Out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default HomeNavigation;
