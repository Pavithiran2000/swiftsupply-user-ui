import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Assets from "../../assets/Assets";
import { Eye, EyeSlash, Google } from "iconsax-react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, SetshowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Validate inputs
    if (!email) {
      setEmailError("Email is required.");
    }
    if (!password) {
      setPasswordError("Password is required.");
    }

    // If there are errors, stop submission
    if (!email || !password) {
      return;
    }

    setIsLoading(true); // Simulate loading
    const success = login(email, password);

    if (success) {
      navigate("/home");
    } else {
      setPasswordError("Invalid email or password."); // Set error if login fails
    }

    setIsLoading(false); // Stop loading
  };

  return (
    <div className="flex min-h-screen bg-white ">
      {/* Left Side: Logo and Text */}
      <div className="w-3/5 flex flex-col justify-between ">
        {/* Logo */}
        <img src={Assets.logo} alt="Logo" className="w-[160px] h-[85px] mb-6" />

        {/* Text */}
        <div className="w-full p-[2%] px-[10%]">
          <h1 className="text-4xl font-bold">Sign in to SwiftSupply</h1>
          <p className="text-lg mt-4">
            If you don’t have an account <br />
            You can{" "}
            <Link to="/auth/signup">
              <span className="text-[#A2123D] font-semibold text-base">
                Signup here !
              </span>
            </Link>
          </p>
        </div>

        {/* Image aligned to the bottom */}
        <div className="flex justify-center ">
          <img
          src={Assets.loginThree}
          alt="Login Visual"
          className="w-full h-auto max-w-[950px] max-h-[400px] object-cover "
        />
        </div>
        
      </div>

      {/* Right Side: Sign-In Form */}
      <div className="w-2/5 flex items-center justify-center">
        <div className="w-3/4 flex flex-col items-center">
          <form onSubmit={handleSubmit} className="w-full pb-4">
            <h2 className="text-2xl font-semibold text-gray-700">Sign In</h2>
            <label htmlFor="" className="block pt-4">
              Enter email or user name
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[#D9F1FF] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            {/* Error message */}
            {emailError && (
              <p className="text-[#de2d2d] text-sm mt-2">{emailError}</p>
            )}

            <label htmlFor="" className="block pt-4">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-[#D9F1FF] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                tabIndex={0}
                onClick={() => SetshowPassword(!showPassword)}
                onKeyPress={(e) =>
                  e.key === "Enter" && SetshowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <Eye size={20} variant="Bold" color="#A2123D" />
                ) : (
                  <EyeSlash size={20} variant="Bold" color="#A2123D" />
                )}
              </span>
            </div>
            {/* Error message */}
            {passwordError && (
              <p className="text-[#de2d2d] text-sm mt-2">{passwordError}</p>
            )}

            <div className="w-full text-right text-[#de2d2d]/70 text-xs pt-4">
              <Link to="/auth/forgot-password">Forgot password?</Link>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 rounded-md mt-4 text-base font-medium ${
                isLoading ? "bg-[#A2123D]" : "bg-[#A2123D] text-white"
              }`}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Divider line with "Or" */}
          <div className="relative w-full my-6">
            <div className="border-t border-gray-300"></div>
            <p className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-white font-medium px-2 text-[#A2123D] text-sm">
              Or
            </p>
          </div>

          {/* Google Sign-In Button */}
          <button className="w-full py-2 px-4 rounded-md bg-white border border-[#A2123D] shadow-sm flex items-center justify-center gap-2 hover:bg-gray-100">
            <span className="font-semibold text-base flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.98em"
                height="1em"
                viewBox="0 0 256 262"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                ></path>
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                ></path>
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                ></path>
              </svg>
              Sign in with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
