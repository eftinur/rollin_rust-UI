import { useContext } from "react";
import { Navigate } from "react-router-dom";
import MyLoader from "../components/MyLoader/MyLoader";
import { AUTH_CONTEXT } from "../context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AUTH_CONTEXT);

  // Handling renders depending on user_sign-in
  if (loading) {
    return <MyLoader />;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/signin" replace={true} />;
};

export default PrivateRoute;
