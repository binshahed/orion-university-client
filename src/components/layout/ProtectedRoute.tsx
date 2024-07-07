import { Navigate } from "react-router-dom";
import { useCurrentToken } from "../../store/app/features/auth/authSlice";
import { ReactNode } from "react";
import { useAppSelector } from "../../store/hooks";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);

  if (!token) {
    return <Navigate to="/sign-in" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
