import { Link } from "react-router-dom";
import logo from "/public/assets/logo.png";
import { useState } from "react";
import { FaPaintBrush, FaTextHeight } from "react-icons/fa";
import {
  TbInfoCircle,
  TbMessage,
  TbShare3,
  TbShieldLock,
} from "react-icons/tb";
function Sidebar({ isOpenSidebar, toggleSidebar }) {
  const [activefont, setActivefont] = useState("-");
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#f8f1ee] shadow-lg transform transition-all duration-300 ease-in-out z-50 ${
          isOpenSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <Link className="" to="/">
            <img
              alt=""
              src={logo}
              className="sm:h-[15%] sm:w-[60%] xs:h-[20%] xs:w-[70%]"
            />
          </Link>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <nav className="p-4 mt-4">
          <ul className="mt-2 space-y-5 flex flex-col">
            <li className="flex items-center gap-3 hover:text-[#c05e36] transition-colors">
              <FaPaintBrush className="w-5 h-5" />
              <Link to="#">Theme</Link>
            </li>
            <li className="flex items-center gap-3 hover:text-[#c05e36] transition-colors">
              <FaTextHeight className="w-5 h-5" />
              <Link to="#">Text Size</Link>
              <div className="bg-[#c05e36] w-28 h-9 rounded-full flex items-center justify-center gap-2 text-white">
                <button
                  onClick={() => setActivefont("-")}
                  className={`px-4 py-1 rounded-full text-lg transition ${
                    activefont === "-"
                      ? "bg-white text-[#c05e36] py-1"
                      : "hover:bg-white/20"
                  }`}
                >
                  -
                </button>
                <button
                  onClick={() => setActivefont("+")}
                  className={`px-3 py-1 rounded-full text-lg transition ${
                    activefont === "+"
                      ? "bg-white text-[#c05e36]"
                      : "hover:bg-white/20"
                  }`}
                >
                  +
                </button>
              </div>
            </li>
            <li className="flex items-center gap-3 hover:text-[#c05e36] transition-colors">
              <TbShare3 className="w-5 h-5" />
              <Link to="#">Share</Link>
            </li>
            <li className="flex items-center gap-3 hover:text-[#c05e36] transition-colors">
              <TbInfoCircle className="w-5 h-5" />
              <Link to="/about">About Us</Link>
            </li>
            <li className="flex items-center gap-3 hover:text-[#c05e36] transition-colors">
              <TbMessage className="w-5 h-5" />
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="flex items-center gap-3 hover:text-[#c05e36] transition-colors">
              <TbShieldLock className="w-5 h-5" />
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpenSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

export default Sidebar;
