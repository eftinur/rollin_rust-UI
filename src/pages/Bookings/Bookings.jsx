import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
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
          toast.success("Deleted Successfullt");
          // Filtering remaining bookings later it'll be replaced with TanStack Query
          const remaining = bookings.filter((el) => el._id !== id);
          setBookings(remaining);
        }
      });
  };

  return (
    <div className="container min-h-screen mx-auto px-4 py-14">
      <div className="text-xs">
        <table>
          {/* Caption Tag Always has to be the immediate child. its the convention */}
          <caption className="animate-gradient-text text-4xl lg:text-7xl text-center capitalize font-bold py-8">
            Your Bookings Details
          </caption>
          {/* Table Header */}
          <thead>
            <tr>
              <th>Serial no.</th>
              <th>Service Details</th>
              <th>Customer Details</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Table Rows and Columns */}
          <tbody>
            {bookings?.map((booking, index) => (
              <tr key={index}>
                <td>{(index += 1)}</td>
                <td>
                  <p>{booking?.serviceName}</p>
                </td>
                <td>
                  <p>{booking?.email}</p>{" "}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(booking?._id)}
                    className="px-4 py-2 bg-[#007af1] rounded-lg text-sm"
                  >
                    {/* <CiSquareRemove size={32} /> */}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
