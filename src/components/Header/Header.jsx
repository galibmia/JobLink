import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import "./Header.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky sm:w-full md:max-w-screen-xl mx-auto z-20 top-0 start-0 border-b border-gray-200 sm:rounded-none md:rounded-3xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-gray-900">CareerLink</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white px-5 py-5 btn-primary rounded-lg text-xl">Start Applying</button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:ml-auto">
            <li>
              <ActiveLink to="/" className="block py-2 px-3 text-gray-900 md:p-0 md:dark:text-blue-500" aria-current="page">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/about" className="block py-2 px-3 rounded md:p-0 text-gray-900">About</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/statistics" className="block py-2 px-3 rounded md:p-0 text-gray-900">Statistics</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/applied-job" className="block py-2 px-3 rounded md:p-0 text-gray-900">Applied Jobs</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blogs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
