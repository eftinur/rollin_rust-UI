import { createBrowserRouter } from "react-router-dom";
import Services from "../components/Services/Services";
import Main from "../layout/Main";
import BookingForm from "../pages/BookingForm/BookingForm";
import Bookings from "../pages/Bookings/Bookings";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/booking-form/:id",
        element: <BookingForm />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
