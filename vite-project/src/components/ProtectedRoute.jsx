import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, session }) => {
  if (!session) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
