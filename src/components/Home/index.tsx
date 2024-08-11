import React from "react";
import userAvatar from "../../assets/login.svg";
import chat from "../../assets/chat.svg";
import { Post } from "../Post";
import { CreatePost } from "../Post/CreatePostSection";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212] text-[#F1F1F1]">
      <div className="w-full max-w-3xl p-8">
        <h1
          className="font-inter"
          style={{
            fontSize: "28px",
            fontWeight: 500,
            lineHeight: "33.89px",
            textAlign: "left",
            color: "rgba(197, 199, 202, 1)",
          }}
        >
          Hello Jane
        </h1>
        <p
          className="mt-4 max-w-[580px]"
          style={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            textAlign: "left",
            color: "rgba(127, 128, 132, 1)",
          }}
        >
          How are you doing today? Would you like to share something with the
          community?{" "}
          <span role="img" aria-label="emoji">
            🤗
          </span>
        </p>

        {/* Create Post Section */}
        <CreatePost />

        {/* Post List */}
        <Post />
      </div>
    </div>
  );
};

export default Home;
