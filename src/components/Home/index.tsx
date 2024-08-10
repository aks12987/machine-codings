// src/pages/Home.tsx
import React from "react";

export const Home = () => {
  return (
    <div className="p-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Hello Jane</h1>
      <p>
        How are you feeling today? Would you like to share something with the
        community? 😊
      </p>
      <div className="mt-4">
        <textarea
          className="w-full p-3 text-black rounded"
          placeholder="How are you feeling today?"
        />
        <button className="mt-2 p-2 bg-blue-600 rounded">Post</button>
      </div>
      {/* Implement the feed section based on your data structure */}
    </div>
  );
};
