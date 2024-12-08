import React, { ReactElement } from "react";
import { Route, RouteProps, Navigate } from "react-router-dom";

interface PrivateRouteProps extends Omit<RouteProps, "element"> {
  element: ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem("accessToken");

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
