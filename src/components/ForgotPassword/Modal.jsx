import React from "react";

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-md text-center">
        <h2 className="text-lg font-semibold text-gray-800">Notification</h2>
        <p className="text-gray-600 mt-4">{message}</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-[#A2123D]/90 text-white rounded-md hover:bg-[#A2123D]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
