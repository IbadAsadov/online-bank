import { FC } from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRouteComponentProps {
  children: React.ReactNode;
}

const ProtectedRoute: FC<IProtectedRouteComponentProps> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};


export default ProtectedRoute;