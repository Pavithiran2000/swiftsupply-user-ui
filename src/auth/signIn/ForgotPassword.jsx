import React, { useState } from "react";
import Assets from "../../assets/Assets";
import Modal from "../../components/ForgotPassword/Modal";
import { isValidEmail } from "../../context/utils";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setModalMessage("Please enter a valid email address.");
      setIsModalOpen(true);
      return;
    }
    setModalMessage("Password reset instructions have been sent to your email.");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left Side: Logo and Image */}
      <div className="w-full md:w-3/5 flex flex-col justify-between bg-white shadow-md">
        {/* Logo */}
        <img
          src={Assets.logo}
          alt="Logo"
          className="w-[160px] h-[85px] mb-8"
        />

        {/* Image aligned to the bottom */}
        <div className="flex justify-center h-full items-end">
          <img
            src={Assets.loginOne}
            alt="Login Visual"
            className="w-full h-auto max-w-[600px] max-h-[550px] object-cover"
          />
        </div>
      </div>

      {/* Right Side: Forgot Password Form */}
      <div className="w-full md:w-2/5 flex items-center justify-center bg-white">
        <div className="w-3/4 flex flex-col">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Forgot Password
          </h1>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Enter email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md text-white bg-[#A2123D] shadow-sm flex items-center justify-center gap-2"
            >
              Send Link
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={modalMessage}
      />
    </div>
  );
};

export default ForgotPassword;
