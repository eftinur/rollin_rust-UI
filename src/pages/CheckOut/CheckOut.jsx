import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AUTH_CONTEXT } from "../../context/AuthProvider/AuthProvider";
const CheckOut = () => {
  const [service, setService] = useState({});
  const params = useParams(); // Getting the serviceId from URL

  useEffect(() => {
    axios.get(`http://localhost:5000/service/${params.id}`).then((res) => {
      setService(res.data);
    });
  }, [params.id]);

  // Getting user Data from contextAPI
  const { user } = useContext(AUTH_CONTEXT);

  // fixing scrolling Error
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Handling The Booking Form to store booking data in MongoDB
  const handleBooking = (e) => {
    // Getting values from the register Form
    e.preventDefault();
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const booking = {
      serviceName: service?.title,
      price: service?.price,
      email: user?.email,
      address: address,
      phone: phone,
      message: message,
    };

    // Sending Booking Data to Database
    // this'll be replaced with TanStack Query in PROD.
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          e.target.reset();
          alert("API Working");
        }
      });
  };

  return (
    // Checkout + Service Details Page
    <div className="container mx-auto text-white py-20">
      <div className="w-3/4 mx-auto mb-20">
        <h2 className="animate-gradient-text text-7xl text-center capitalize px-4 py-8">
          Fill out the form to confirm your booking
        </h2>
      </div>
      <div className="flex items-start gap-x-8 mt-16 px-8">
        <div className="flex-1 px-6 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1613824761393-f8a4f8f4c514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="w-full block object-cover rounded-lg"
          />
          <h5 className="text-3xl my-6">{service?.title}</h5>
          <p className="text-xl mb-4">
            Price:{" "}
            <span className="text-2xl font-medium">${service?.price}</span>
          </p>
          <span className="text-lg">Package Includes:</span>
          {service.details?.map((el, index) => (
            <div key={index}>
              <p className="mb-2 mt-2">
                <span className="pr-2">{(index += 1)}.</span>
                {el}
              </p>
            </div>
          ))}
        </div>
        <div className="w-2/5 px-6">
          <h5 className="text-5xl mb-4">Booking Form</h5>
          <form onSubmit={handleBooking}>
            <input
              className="input"
              name="email"
              type="email"
              autoComplete="off"
              defaultValue={service?.title}
              readOnly
            />
            <input
              className="input"
              name="email"
              type="email"
              autoComplete="off"
              readOnly
              defaultValue={user?.email}
            />
            <input
              className="input"
              name="address"
              type="text"
              autoComplete="off"
              placeholder="Address"
            />
            <input
              className="input"
              name="phone"
              type="number"
              autoComplete="off"
              placeholder="Mobile no."
            />
            <textarea
              rows="5"
              className="input"
              name="message"
              type="text"
              autoComplete="off"
              placeholder="Message"
            />
            <button className="cssbuttons-io-button">
              Confirm Booking
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </button>
          </form>
        </div>
      </div>
      {/* Commenting Feature */}
    </div>
  );
};

export default CheckOut;
