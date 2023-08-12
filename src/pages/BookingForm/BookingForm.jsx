import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { AUTH_CONTEXT } from "../../context/AuthProvider/AuthProvider";

const BookingForm = () => {
  const [service, setService] = useState({});

  // Getting user Data from contextAPI
  const { user } = useContext(AUTH_CONTEXT);
  const params = useParams(); // Getting the serviceId from URL

  useEffect(() => {
    axios.get(`http://localhost:5000/service/${params.id}`).then((res) => {
      setService(res.data);
    });
  }, [params.id]);

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

    // Storing Booking Data to Database
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
          toast.success("Booking Confirmed");
        }
      });
  };

  return (
    <div className="container mx-auto py-32 text-white">
      <div className="w-full lg:w-2/4 mx-auto px-8">
        <h5 className="animate-gradient-text text-4xl lg:text-7xl text-center capitalize font-bold py-6">
          Fill out the form to confirm your booking
        </h5>
      </div>
      <div className="w-full lg:w-2/4 mx-auto px-6 mt-8">
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
            required
          />
          <input
            className="input"
            name="phone"
            type="number"
            autoComplete="off"
            placeholder="Mobile no."
            required
          />
          <textarea
            rows="5"
            className="input"
            name="message"
            type="text"
            autoComplete="off"
            placeholder="Message"
          />

          <button className="form_btn w-full mt-3 mb-3">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
