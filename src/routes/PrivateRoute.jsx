import React, { useContext } from 'react';
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <div className="loading loading-dots loading-lg"></div>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/auth/login"}></Navigate>
};

export default PrivateRoute;