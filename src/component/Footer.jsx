// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-100 shadow mt-10">
      <div className="container mx-auto p-4 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Car Listings. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
