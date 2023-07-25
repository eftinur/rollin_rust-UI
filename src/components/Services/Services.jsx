import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Services = () => {
  // Temporary Testing API Data will be replaced by TanStack Query
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get("http://localhost:5000/services").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="container mx-auto text-white py-20">
      <div className="w-3/4 lg:w-2/4 mx-auto mb-20">
        <h2 className="animate-gradient-text text-5xl md:text-7xl lg:text-8xl text-center capitalize ">
          Find the best automobile solutions in town
        </h2>
      </div>
      <div className="w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
        {data?.map((service) => (
          <div key={service._id} className="w-full mx-auto">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1613824761393-f8a4f8f4c514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="w-full h-full block object-cover"
              />
            </div>

            <h5 className="text-xs">{service?._id}</h5>
            {/* redirecting to checkout page */}
            <Link to={`/service/${service._id}`}>
              <button
                onClick={() => navigate(`/service/${service?._id}`)}
                className="cssbuttons-io-button"
              >
                See Details
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
