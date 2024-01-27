import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="login" replace />;
};

export default PrivateRoute;
