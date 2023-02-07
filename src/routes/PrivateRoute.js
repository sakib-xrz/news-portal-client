import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <>
        <div className="flex flex-col m-8 rounded-md shadow-md animate-pulse">
          <div className="h-48 rounded-t bg-gray-200"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-secondary">
            <div className="w-full h-6 rounded bg-gray-200"></div>
            <div className="w-full h-6 rounded bg-gray-200"></div>
            <div className="w-full h-6 rounded bg-gray-200"></div>
            <div className="w-full h-6 rounded bg-gray-200"></div>
            <div className="w-full h-6 rounded bg-gray-200"></div>
            <div className="w-3/4 h-6 rounded bg-gray-200"></div>
          </div>
        </div>
      </>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  

  return children;
};

export default PrivateRoute;
