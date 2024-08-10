// src/components/RegisterModal.tsx
import React from "react";

export const RegisterModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-8 bg-gray-800 rounded shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Create an account to continue
        </h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-black rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-white">
              Username
            </label>
            <input
              type="text"
              placeholder="Choose a perfect username"
              className="w-full p-3 text-black rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Choose a strong password"
              className="w-full p-3 text-black rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
