import React, { useState } from "react";
import { Post } from "../Post";
import { CreatePost } from "../Post/CreatePostSection";
import Register from "../Register";

const HomePage: React.FC = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handlePostClick = () => {
    setShowRegisterModal(true);
  };

  const handleLoginClick = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false);
  };

  const handleCloseModal = () => {
    setShowRegisterModal(false);
    setShowLoginModal(false);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#121212] text-[#F1F1F1]">
      <div
        className={`w-full max-w-3xl p-8 ${
          showRegisterModal || showLoginModal ? "blur-2px" : ""
        }`}
      >
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
        <CreatePost onPostClick={handlePostClick} />

        {/* Post List */}
        <Post />
      </div>

      {/* Register Modal */}
      {showRegisterModal && (
        <Register
          onClose={handleCloseModal}
          onLoginClick={handleLoginClick}
          handleRegisterClick={handleRegisterClick}
          showRegisterModal
        />
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <Register
          onClose={handleCloseModal}
          onLoginClick={handleLoginClick}
          handleRegisterClick={handleRegisterClick}
          showLoginModal
        />
      )}
    </div>
  );
};

export default HomePage;
