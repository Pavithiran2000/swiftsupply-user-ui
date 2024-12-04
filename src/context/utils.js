// Utility function to validate email
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const isValidPassword = (password) => {
    // Example: At least 8 characters, one uppercase, one number
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };
  