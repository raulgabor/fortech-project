import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type ChildrenProps = {
  children?: React.ReactNode;
};

const PrivateRoute = ({ children }: ChildrenProps) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
