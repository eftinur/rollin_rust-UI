import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AUTH_CONTEXT } from "../../context/AuthProvider/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AUTH_CONTEXT); // Getting user Data to run a Query in the API
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => setBookings(res.data));
  }, [user?.email]);

  // Handling Delete Feature
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          // it'll be replaced with React Tositify
          alert("Deleted Successfully");
          // Filtering remaining bookings later it'll be replaced with TanStack Query
          const remaining = bookings.filter((el) => el._id !== id);
          setBookings(remaining);
        }
      });
  };

  return (
    <div className="container min-h-screen mx-auto px-4 py-28">
      <div>
        <p>Table_in_React</p>
        <div className="text-xs">
          <table>
            {/* Caption Tag Always has to be the immediate child. its the convention */}
            <caption>Your Bookings Details</caption>
            {/* Table Header */}
            <thead>
              <tr>
                <th>Serial no.</th>
                <th>Service Details</th>
                <th>Customer Details</th>
                <th>Payment</th>
                <th>Delete</th>
              </tr>
            </thead>
            {/* Table Rows and Columns */}
            <tbody>
              {bookings?.map((booking, index) => (
                <tr key={index}>
                  <td>{(index += 1)}</td>
                  <td>
                    <p className="text-base font-medium">
                      {booking?.serviceName}
                    </p>{" "}
                    <p>${booking?.price}</p>
                  </td>
                  <td>
                    <p className="text-base font-medium">{booking?.email}</p>{" "}
                    <p>{booking?.phone}</p>
                  </td>
                  <td>
                    <button className="form_btn">Pay</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(booking?._id)}
                      className="form_btn"
                    >
                     x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
