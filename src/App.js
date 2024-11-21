import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Footer from './components/footer.js';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ProtectedRoutes /> 
        <Footer/>
      </Router>
      
    </AuthProvider>
  );
}

export default App;
