import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUser } from "./useUser";

const HeaderComponent = ({ onSearch }: { onSearch: (v: string) => void }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
              alt="Logo"
              className="h-8"
            />
          </div>
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for travel agencies, tours, hotels..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom focus:border-custom"
                onChange={handleSearch}
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>
          {user?.role === "admin" && (
            <Link to="/dashboard">
              <button className="!rounded-button bg-custom text-white px-4 py-2 hover:bg-custom/90">
                Dashboard
              </button>
            </Link>
          )}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="!rounded-button bg-custom text-white px-4 py-2 hover:bg-custom/90"
              >
                <i className="fas fa-sign-out-alt mr-2"></i>Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="!rounded-button bg-custom text-white px-4 py-2 hover:bg-custom/90">
                  <i className="fas fa-user-circle mr-2"></i>Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
