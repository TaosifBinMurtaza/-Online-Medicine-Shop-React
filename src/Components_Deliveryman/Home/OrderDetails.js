import "../Css/myStyle.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosConfig from "../Config/axiosConfig";
import { useNavigate } from "react-router-dom";
import HomeNavigation from "../HomeNavigation/HomeNavigation";

const OrderDetails = () => {
  const navigate = useNavigate("");
  const { id } = useParams();
  const [orderlist, setOrderlist] = useState([]);
  const [status, setStatus] = useState("");
  const [customer, setCustomer] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      order_id: id,
      status: status,
    };

    axiosConfig.post("deliveryman/details/update", data).then(
      (succ) => {
        navigate("/orderDetails/update");
      },
      (err) => {}
    );
  };

  useEffect(() => {
    axiosConfig.get("deliveryman/orderdetails/" + id).then(
      (rsp) => {
        setOrderlist(rsp.data);
        setCustomer(rsp.data.customer);
      },
      (er) => {}
    );
  }, []);

  return (
    <div>
      <HomeNavigation />
      <div className="details">
        <form action="" method="post" onSubmit={handleSubmit}>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b className="text-primary">Order ID:</b>
                </td>
                <td>
                  <input
                    type="text"
                    name="order_id"
                    value={orderlist.order_id}
                    readOnly
                    className="border-0"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <b className="text-primary">Ordered Date:</b>
                </td>
                <td>
                  <input
                    type="text"
                    value={orderlist.created_at}
                    readOnly
                    className="border-0"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b className="text-primary">Ordered By:</b>
                </td>
                <td>
                  <input
                    type="text"
                    value={customer.customer_name}
                    readOnly
                    className="border-0"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b className="text-primary">Mobile Number:</b>
                </td>
                <td>
                  <input
                    type="text"
                    value={customer.customer_mob}
                    readOnly
                    className="border-0"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b className="text-primary">Address:</b>
                </td>
                <td>
                  <input
                    type="text"
                    value={customer.customer_add}
                    readOnly
                    className="border-0"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b className="text-primary">E-mail:</b>
                </td>
                <td>
                  <input
                    type="text"
                    value={customer.customer_email}
                    readOnly
                    className="border-0"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <b className="text-primary">Status:</b>
                </td>
                <td>
                  <select
                    name="status"
                    className="form-group col-md-4"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option value="pending">Pending</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </td>
                <td>
                  <input
                    name="change_status"
                    type="submit"
                    value="Change"
                    className="btn btn-primary"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};
export default OrderDetails;
