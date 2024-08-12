import React from "react";
import { useNavigate } from "react-router-dom";
import loginLogo from "../../assets/login.svg";
import eyeIcon from "../../assets/eye.svg";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#121212]">
      <img src={loginLogo} alt="Login Logo" className="h-12 mb-[50px]" />

      <div
        className="relative w-full max-w-md p-1 rounded-[8px]"
        style={{
          background: "linear-gradient(129.59deg, #969696 0%, #343434 98.18%)",
        }}
      >
        <div className="p-8 bg-[#1c1c1c] rounded-[8px] shadow-lg text-center">
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
            WELCOME BACK
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
            Log into your account
          </h1>
          <form onSubmit={handleLogin}>
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
                Email or Username
              </label>
              <input
                type="text"
                placeholder="Enter your email or username"
                className="w-full p-3 rounded-lg border border-[#4d4d4d]"
                style={{
                  backgroundColor: "transparent",
                  color: "#7F8084",
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
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="text-sm hover:underline"
                    style={{
                      color: "rgba(197, 199, 202, 1)",
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "14.52px",
                    }}
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 rounded-lg border border-[#4d4d4d]"
                  style={{
                    backgroundColor: "transparent",
                    color: "#7F8084",
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
              Login now
            </button>
          </form>
          <div className="mt-[12px] text-[#7F8084] font-inter text-[14px] font-medium leading-[16.94px] text-left">
            <span>Not registered yet? </span>
            <span className="text-white">Register →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
