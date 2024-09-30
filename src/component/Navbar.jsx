// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          {/* Logo for Drift Dealers */}
          <img src="src/assets/car logo.png" alt="Logo" className="w-10 h-10 mr-2" />
          {/* Website name */}
          <Link to="/">
            <h1 className="text-2xl font-bold">Drift Dealers</h1>
          </Link>
        </div>

        <div className="flex items-center">
          {/* Logo for Contact */}
          <img src="src/assets/call.png" alt="Contact Logo" className="w-6 h-6 mr-2" />
          <Link to="/contact">
            <h1>Contact</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
