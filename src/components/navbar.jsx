import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';
import profileIcon from '/src/assets/dropdown.png'; // Ensure this path is correct to your profile icon image

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const savedEmail = sessionStorage.getItem('userEmail'); // Retrieve the saved email from session storage

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/home">
        <img src={logo} alt="Logo" className="h-14" />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        <Link to="/home" className="text-white text-2xl font-bold hover:text-gray-300">Learn</Link>
        <Link to="/Live" className="text-white text-2xl font-bold hover:text-gray-300">Live</Link>
        <Link to="/dashboard" className="text-white text-2xl font-bold hover:text-gray-300">Discussion</Link>
      </div>

      {/* Dropdown and Profile Button */}
      <div className="relative">
        <button onClick={toggleDropdown} className="flex items-center text-white hover:text-gray-300">
          <span className="mr-2">{savedEmail}</span> {/* Display the saved email */}
          <img src={profileIcon} alt="Profile" className="h-6" /> {/* Profile icon */}
        </button>
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute bg-white mt-2 p-2 rounded shadow"
            style={{
              right: dropdownRef.current && dropdownRef.current.offsetWidth > 200 ? 'auto' : '0',
              minWidth: '150px',
            }}
          >
            <Link to="/profile" className="block text-gray-800 hover:bg-gray-200 py-1 px-4 whitespace-nowrap">Profile</Link>
            <Link to="/" className="block text-gray-800 hover:bg-gray-200 py-1 px-4 whitespace-nowrap">Sign Out</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
