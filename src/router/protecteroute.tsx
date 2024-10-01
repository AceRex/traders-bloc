import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  redirectPath = "/sign-up",
  children,
}: {
  isAuthenticated: boolean;
  redirectPath: string;
  children: ReactNode;
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
