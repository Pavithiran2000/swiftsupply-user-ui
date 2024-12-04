import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../auth/signIn/SignIn';
import SignUp from '../auth/signUp/SignUp';
import ForgotPassword from '../auth/signIn/ForgotPassword';
import ResetPassword from '../auth/signIn/ResetPassword';
import Home from '../pages/home/Home';
import ProtectedRoute from './ProtectedRoute';
import NotFound from '../pages/NotFound/NotFound';

const ProtectedRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* Catch-all route for undefined paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ProtectedRoutes;
