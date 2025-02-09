import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { HiMenu, HiX } from "react-icons/hi";
import logo from '../../assets/event-logo.webp'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User logged out successfully."))
      .catch((error) => console.error("Error during logout:", error));
  };

  return (
    <nav className="bg-transparent backdrop-blur-md fixed container z-50 shadow-md px-4  md:px-6 flex justify-between items-center ">
      {/* Logo */}
    <div className="flex gap-2">
      
      <Link to="/" >
      <img 
        src={logo}
        alt="logo"
        className="w-20 h-20"
      />
      </Link>
    </div>

      {/* Desktop Menu */}
      <div className=" md:flex items-center gap-6">
        <Link to="/createEvent" className="text-lg font-bold text-green-400 hover:text-red-800">
          Manage Events
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-red-600">
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Profile & Login Buttons (Desktop) */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <img src={user?.photoURL || "https://via.placeholder.com/40"} alt="User" className="w-10 rounded-full" />
            </button>
            <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow bg-white rounded-md w-52 z-50">
              <li><span className="text-gray-700 font-medium">{user.displayName || "User"}</span></li>
              <li><button onClick={handleLogOut}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
          </>
        )}
      </div>

      {/* Mobile Dropdown Menu (Fixed) */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center gap-4 py-4">
            <Link to="/createEvent" className="text-lg text-gray-700 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Manage Events</Link>
            {user ? (
              <>
                <li className="text-gray-700 font-medium">{user.displayName || "User"}</li>
                <li><button onClick={handleLogOut}>Logout</button></li>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline w-32" onClick={() => setIsMenuOpen(false)}>Login</Link>
                <Link to="/register" className="btn btn-primary w-32" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
