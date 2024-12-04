import React, { createContext, useState, useContext } from 'react';

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Mock login function (replace with your API logic)
  const login = (email, password) => {
    
    if (email === "test@test.com" && password === "123") {
      setUser({ email }); 
      return true; 
    }
    return false; //false
  };
  

  // Mock logout function
  const logout = () => {
    setUser(null); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
