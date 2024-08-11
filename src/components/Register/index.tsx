import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import loginLogo from "../../assets/login.svg";
import eyeIcon from "../../assets/eye.svg";
import closeIcon from "../../assets/close.svg"; // Assuming you have a close icon

const Register = () => {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    // Navigate back to the home page with an animation
    navigate("/", { state: { animate: true } });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="relative w-full max-w-md p-1 rounded-[8px]"
        style={{
          background: "linear-gradient(129.59deg, #969696 0%, #343434 98.18%)",
        }}
      >
        <div className="relative p-8 bg-[#1c1c1c] rounded-[8px] shadow-lg text-center">
          {/* Close Icon */}
          <button className="absolute top-4 right-4" onClick={handleCloseClick}>
            <img src={closeIcon} alt="Close" className="h-5 w-5" />
          </button>

          <h2
            className="mb-4 text-center"
            style={{
              color: "rgba(107, 108, 112, 1)",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "16.94px",
              letterSpacing: "0.03em",
              textAlign: "center",
            }}
          >
            SIGN UP
          </h2>
          <h1
            className="mb-[45px] text-center"
            style={{
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "22px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Create an account to continue
          </h1>
          <form>
            <div className="mb-4">
              <label
                className="block mb-[10px]"
                style={{
                  color: "rgba(197, 199, 202, 1)",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "16.94px",
                  letterSpacing: "0.03em",
                  textAlign: "left",
                }}
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-[#4d4d4d]"
                style={{
                  backgroundColor: "#333333",
                  color: "rgba(197, 199, 202, 1)",
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-[10px]"
                style={{
                  color: "rgba(197, 199, 202, 1)",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "16.94px",
                  letterSpacing: "0.03em",
                  textAlign: "left",
                }}
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Choose a preferred username"
                className="w-full p-3 rounded-lg border border-[#4d4d4d]"
                style={{
                  backgroundColor: "#333333",
                  color: "rgba(197, 199, 202, 1)",
                }}
              />
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-[10px]">
                <label
                  className="block"
                  style={{
                    color: "rgba(197, 199, 202, 1)",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "16.94px",
                    letterSpacing: "0.03em",
                    textAlign: "left",
                  }}
                >
                  Password
                </label>
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Choose a strong password"
                  className="w-full p-3 rounded-lg border border-[#4d4d4d]"
                  style={{
                    backgroundColor: "#333333",
                    color: "rgba(197, 199, 202, 1)",
                  }}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  <img
                    src={eyeIcon}
                    alt="Toggle Password Visibility"
                    className="h-5 w-5 text-[#8e8e8e]"
                  />
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full p-3 mt-4 text-white bg-[#4A96FF] rounded-lg hover:bg-[#3b7ed4]"
            >
              Continue
            </button>
          </form>
          <div className="mt-[12px] text-[#7F8084] font-inter text-[14px] font-medium leading-[16.94px] text-left">
            <span>Already have an account? </span>
            <span className="text-white">Login →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
