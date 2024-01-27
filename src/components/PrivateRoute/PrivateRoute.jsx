import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);
  return <div></div>;
};

export default PrivateRoute;
