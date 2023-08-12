import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyLoader from "../MyLoader/MyLoader";

const Services = () => {
  // Temporary Testing API Data will be replaced by TanStack Query
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/services").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  /*
  1. https://images.pexels.com/photos/4481954/pexels-photo-4481954.jpeg?auto=compress&cs=tinysrgb&w=600
  2. https://images.pexels.com/photos/6870307/pexels-photo-6870307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
  3. https://images.pexels.com/photos/5233262/pexels-photo-5233262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
  4. https://images.pexels.com/photos/13010632/pexels-photo-13010632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
  5. https://images.pexels.com/photos/4489760/pexels-photo-4489760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
  */

  return (
    <div className="container mx-auto text-white py-20">
      <div className="w-full lg:w-2/4 mx-auto mb-20 px-4">
        <h2 className="animate-gradient-text text-4xl md:text-7xl text-center capitalize font-bold ">
          Find the best automobile solutions in town
        </h2>
      </div>
      {isLoading ? (
        <MyLoader />
      ) : (
        <div className="w-full lg:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 px-4">
          {data?.map((service) => (
            <div key={service._id} className="w-full mx-auto bg-white px-8 py-5 text-black rounded-lg">
              <div className="mb-8 rounded-lg">
                <img
                  src={service?.image}
                  alt=""
                  className="w-full h-full block object-cover rounded-lg"
                />
              </div>

              <p className="text-xl lg:text-2xl font-bold mb-4">
                {service?.title}
              </p>

              {/* redirecting to checkout page */}
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
