import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ProtectedRoutes /> 
      </Router>
    </AuthProvider>
  );
}

export default App;
