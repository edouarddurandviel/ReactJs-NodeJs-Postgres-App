import { useLocation, useNavigate } from "react-router";
import type { UserConnected } from "../../../stores/auth/interfaces";
import { useEffect, type ReactNode } from "react";

const Index = ({ user, children }: PrivateRouteProps) => {
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    } else if (user && location.pathname === "/login") {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return children;

  // if (!user && location.pathname !== "/login") {
  //   return <Navigate to="/login" replace />;
  // } else if (user && location.pathname === "/login") {
  //   return <Navigate to="/" replace />;
  // } else {
  //   return children;
  // }
};

interface PrivateRouteProps extends React.PropsWithChildren {
  user: UserConnected | null;
  children: ReactNode;
}

export default Index;
