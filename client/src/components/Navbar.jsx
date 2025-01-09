import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl">HospitalFoodDelivery</div>
        <div>
          {/* Show Login/Signup or Logout based on user authentication */}
          {!token ? (
            <>
              <Link
                to="/login"
                className="text-white px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 border-white border-2"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 border-white border-2 ml-4"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <span className="text-white mr-4">Welcome, {role}</span>
              <button
                onClick={handleLogout}
                className="text-white px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 border-white border-2"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
