import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Assets from "../../assets/Assets";
import Modal from "../../components/ForgotPassword/Modal";

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate(); // React Router's navigate function

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error message
    setErrorMessage("");

    // Validate passwords
    if (!newPassword || !confirmPassword) {
      setErrorMessage("Both fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    setModalMessage("Password reset successful.");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Close modal
    setIsModalOpen(false);

    // Redirect to login page
    setTimeout(() => {
      navigate("/auth/signin"); 
    }, 500); 
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side: Image */}
      <div className="w-full md:w-3/5 flex flex-col justify-between bg-white">
        <div className="flex justify-center h-full items-end">
          <img
            src={Assets.loginOne}
            alt="Password Reset"
            className="w-full h-auto max-w-[600px] max-h-[550px] object-cover"
          />
        </div>
      </div>

      {/* Right Side: Reset Password Form */}
      <div className="w-full md:w-2/5 flex items-center justify-center bg-white">
        <div className="w-3/4 flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Reset Password
          </h2>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter new password"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Confirm new password"
              />
            </div>
            {errorMessage && (
              <p className="text-red-600 text-sm mb-4">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md text-white bg-[#A2123D] shadow-sm"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
    </div>
  );
};

export default ResetPasswordForm;
