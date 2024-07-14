import React from 'react';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
    const token = sessionStorage.getItem('token');
    let exp = null;
  
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1])); // Decode JWT
      exp = tokenPayload.exp;
    }
  
    if (!token || Date.now() >= exp * 1000) {
      sessionStorage.removeItem('token');
      return <Navigate to="/login" />;
    }
  
    return children;
  };

export default ProtectedRoute;