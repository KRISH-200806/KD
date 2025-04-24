import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OffcanvasPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Open the drawer immediately when this page loads
    setIsDrawerOpen(true);
  }, []);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    // Optionally navigate back to the previous page after closing
    navigate(-1); // Go back one step in history
  };

  return (
    <div
      id="drawer-navigation"
      className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white w-64 dark:bg-gray-800`}
      tabIndex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        Menu
      </h5>
      <button
        type="button"
        onClick={closeDrawer}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        {/* Add your navigation links here */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </div>
  );
}

export default OffcanvasPage;
