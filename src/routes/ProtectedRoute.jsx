import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/unauthorized" />;

  return <Outlet />;
};

export default ProtectedRoute;
