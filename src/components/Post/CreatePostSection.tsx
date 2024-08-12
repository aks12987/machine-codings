import React from "react";

interface CreatePostProps {
  onPostClick: () => void;
}

export const CreatePost: React.FC<CreatePostProps> = ({ onPostClick }) => {
  return (
    <div
      className="mt-4 p-6 bg-[#1C1C1E] rounded-lg shadow-lg"
      style={{
        border: "2px solid rgba(53, 55, 59, 1)",
      }}
    >
      <h2 className="text-xl font-medium text-[#C5C7CA]">Create post</h2>
      <div
        className="mt-4 p-4 bg-[#2C2C2E] rounded-lg flex items-center w-full"
        style={{ background: "rgba(25, 25, 32, 1)" }}
      >
        <div className="flex gap-4 items-center w-full">
          <div className="w-12 h-12 flex justify-center items-center">
            <div
              className="w-12 h-12 rounded-full flex justify-center items-center"
              style={{ background: "rgba(39, 41, 45, 1)" }}
            >
              💬
            </div>
          </div>

          <input
            type="text"
            placeholder="How are you feeling today?"
            className="w-full bg-transparent text-[#7F8084] placeholder-[#B3B3B3] outline-none"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={onPostClick}
          className="bg-[#4A96FF] text-white py-2 px-6 rounded-lg"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};
