import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Preloader from "../../Components/Shared/PreLoader/Preloader";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const {user, loading} = useContext(AuthContext)
  
  const location = useLocation();

    if (loading) {
      return <Preloader></Preloader>
    }

    if (user && user.uid) {
      return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace />;

};

export default PrivateRoute;