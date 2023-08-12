import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MyLoader from "../../components/MyLoader/MyLoader";

const ServiceDetails = () => {
  const [service, setService] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const params = useParams(); // Getting the serviceId from URL

  useEffect(() => {
    axios.get(`http://localhost:5000/service/${params.id}`).then((res) => {
      setService(res.data);
      setIsLoading(false);
    });
  }, [params.id]);

  // fixing scrolling Error
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : (
        <div className="container mx-auto text-white pt-32 border-b pb-20">
          <div className="flex flex-col lg:flex-row gap-12 px-6 rounded-lg">
            <img
              src={service?.image}
              alt=""
              className="w-full lg:w-2/4 block object-cover rounded-lg"
            />
            <div className="flex-1">
              <p className="text-3xl lg:text-5xl font-bold mb-4">
                {service?.title}
              </p>
              <p className="mb-2">
                Price:
                <span className="text-xl font-medium">${service?.price}</span>
              </p>
              <p className="text-base lg:text-xl mt-6">Package Includes:</p>
              {service.details?.map((el, index) => (
                <div key={index}>
                  <p className="text-xs lg:text-base mt-3 mb-6">{el}</p>
                </div>
              ))}
              <button
                onClick={() => navigate(`/booking-form/${service?._id}`)}
                className="cssbuttons-io-button mt-6"
              >
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
            </div>
          </div>
          {/* Commenting Feature */}
        </div>
      )}
      <div className="text-white text-center py-32">
        <p>Call us anytime!</p>
        <p className="text-3xl lg:text-5xl font-bold my-4">HELPLINE</p>
        <p className="pb-2">+222 447 555</p>
        <p>rollinrust@helpline.com</p>
      </div>
    </>
  );
};

export default ServiceDetails;
