import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';  

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();  

  if (!user) {//(!user)
    return <Navigate to="/auth/signin" />;  // Redirect if the user is not logged in
  }

  return children;
};

export default ProtectedRoute;
