import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AUTH_CONTEXT } from "../context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AUTH_CONTEXT);
  const location = useLocation();

  // Handling renders depending on user_sign-in
  if (loading) {
    return <p className="font-medium text-indigo-600 text-center py-20">Loader</p>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRoute;
