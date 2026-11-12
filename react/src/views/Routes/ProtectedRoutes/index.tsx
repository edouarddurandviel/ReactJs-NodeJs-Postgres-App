import { Navigate, useLocation } from "react-router";
import type { UserConnected } from "../../../stores/auth/interfaces";
import { type ReactNode } from "react";

const Index = ({ user, session, children }: PrivateRouteProps) => {
  const location = useLocation();

  if (!user && !session && location.pathname !== "/login") {
    return <Navigate to="/login" replace />;
  }
  
  if (user && location.pathname === "/login") {
    return <Navigate to="/" replace />;
  }
  
  if (!user && !session && location.pathname === "/") {
      return <Navigate to="/login" replace />;
  } 
  
  if(session && user){
    return <Navigate to="/" replace />
  }

    return children;
  
};

interface PrivateRouteProps {
  user: UserConnected | null;
  session: boolean | null;
  children: ReactNode;
}

export default Index;
