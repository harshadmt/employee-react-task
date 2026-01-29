import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b px-6 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Left links */}
        <div className="flex gap-6 text-sm text-gray-700">
          <Link
            to="/departments"
            className="hover:text-blue-600 transition"
          >
            Departments
          </Link>

          <Link
            to="/add-department"
            className="hover:text-blue-600 transition"
          >
            Add Department
          </Link>
        </div>

        {/* Right action */}
        <button
          onClick={logout}
          className="text-sm text-red-500 hover:text-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
