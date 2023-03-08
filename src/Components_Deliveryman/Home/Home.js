//import "../myStyle.css";
import { useState, useEffect } from "react";
import axiosConfig from "../Config/axiosConfig";
import { Link } from "react-router-dom";
import HomeNavigation from "../HomeNavigation/HomeNavigation";

const Home = () => {
  const [orderlist, setOrderlist] = useState([]);
  useEffect(() => {
    axiosConfig.get("deliveryman/pendingorder").then(
      (rsp) => {
        setOrderlist(rsp.data);
      },
      (er) => {}
    );
  }, []);

  return (
    <div>
      <HomeNavigation />

      <div className="container2">
        <center>
          <h2>Pending Order List: </h2>
          <br />
        </center>
        <h5>
          Total Pending Orders:{" "}
          <span className="text-danger"> {Object.keys(orderlist).length}</span>
        </h5>
        <br />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order Id</th>
              <th scope="col">Date</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Address</th>
              <th scope="col">E-mail</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {orderlist.map((l) => (
              <tr key={l.order_id}>
                <td scope="row">{l.order_id}</td>
                <td> {l.created_at}</td>
                <td>{l.customer.customer_name}</td>
                <td>{l.customer.customer_mob}</td>
                <td>{l.customer.customer_email}</td>
                <td>{l.customer.customer_add}</td>

                <td>
                  <Link to={`/OrderDetails/${l.order_id}`}>{l.status}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
