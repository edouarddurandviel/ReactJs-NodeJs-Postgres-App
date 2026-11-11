import { useLocation, useNavigate } from "react-router";
import type { UserConnected } from "../../../stores/auth/interfaces";
import { useEffect, type ReactNode } from "react";

const Index = ({ user, session, children }: PrivateRouteProps) => {
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user && location.pathname !== "/login") {
      navigate("/login", { replace: true });
    } else if (user && location.pathname === "/login") {
      navigate("/", { replace: true });
    }

    if(session && !user){
       navigate("/", { replace: true });
    }
  }, [user, session, navigate]);

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
  session: boolean;
  children: ReactNode;
}

export default Index;
