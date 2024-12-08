import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      const response = await fetch("https://booking-app-b.vercel.app/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage(data.message);
        localStorage.setItem("accessToken", data.data.accessToken);
        navigate("/");
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch {
      setError("An error occurred while logging in. Please try again.");
    }
  };

  const handleBypassLogin = () => {
    setEmail("admin@gmail.com");
    setPassword("123456");
  };

  return (
    <div className="bg-gray-50 font-['Inter']">
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
            alt="Logo"
          />
          <div id="login" className="mt-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="/signin"
                className="font-medium text-custom hover:text-custom/90"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form id="loginForm" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative">
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-custom focus:outline-none focus:ring-custom sm:text-sm"
                    placeholder="Enter your email"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-custom focus:outline-none focus:ring-custom sm:text-sm"
                    placeholder="Enter your password"
                    defaultValue="123456"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <i className="fas fa-eye text-gray-400"></i>
                  </button>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {successMessage && (
                <p className="text-green-500 text-sm">{successMessage}</p>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-custom focus:ring-custom"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-custom hover:text-custom/90"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="!rounded-button flex w-full justify-center rounded-md border border-transparent bg-custom px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-custom focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={handleBypassLogin}
                  className="!rounded-button bg-blue-600 flex w-full justify-center rounded-md border border-transparent bg-custom px-4 py-2 text-sm font-medium text-black shadow-sm"
                >
                  Bypass Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
