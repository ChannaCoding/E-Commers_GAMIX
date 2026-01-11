import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!token) {
    // បើអត់ទាន់មាន Token ទេ ឱ្យទៅទំព័រ Login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;