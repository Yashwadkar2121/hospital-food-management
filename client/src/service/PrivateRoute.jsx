import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles }) => {
  const role = localStorage.getItem("role");

  // If the role is not allowed, redirect to the Error component
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/error" replace />;
  }

  return children;
};

export default PrivateRoute;
