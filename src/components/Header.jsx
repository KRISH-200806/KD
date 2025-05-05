import React, { useEffect, useRef, useState } from "react";
import logo from "/public/assets/logo.png";
import {
  TbInfoCircle,
  TbMessage,
  TbSettings,
  TbShare3,
  TbShieldLock,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaPaintBrush, FaTextHeight } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";

function Navbar({ isOpenSidebar, toggleSidebar }) {
  const [activeLang, setActiveLang] = useState("en");
  const [activefont, setActivefont] = useState("-");
  const [isOpen, setIsOpen] = useState(false);
const dropdownRefs = useRef({});
  const dropdownMenuRefs = useRef({});
  const [openDropdown, setOpenDropdown] = useState(null);
  useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          openDropdown &&
          !dropdownRefs.current[openDropdown]?.contains(event.target) &&
          !dropdownMenuRefs.current[openDropdown]?.contains(event.target)
        ) {
          setOpenDropdown(null);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [openDropdown]);

  return (
    <div className="bg-[#f8f1ee] shadow-md sticky z-50 xs:top-0 sm:top-0 ">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between py-3 h-[79px] px-4"
      >
        <Link className="" to="/">
          <img
            alt=""
            src={logo}
            className="sm:h-[15%] sm:w-[60%] xs:h-[20%] xs:w-[65%]"
          />
        </Link>

        <div className="hidden md:flex lg:flex-1 lg:justify-end items-center justify-center gap-5">
          <div className="bg-[#c05e36] w-28 h-9 rounded-full flex items-center justify-center gap-2 text-white">
            <button
              onClick={() => setActiveLang("en")}
              className={`px-4 py-1 rounded-full text-sm transition ${
                activeLang === "en"
                  ? "bg-white text-[#c05e36] py-1"
                  : "hover:bg-white/20"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setActiveLang("guj")}
              className={`px-3 py-1 rounded-full text-sm transition ${
                activeLang === "guj"
                  ? "bg-white text-[#c05e36]"
                  : "hover:bg-white/20"
              }`}
            >
              ગુજ
            </button>
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>
            <TbSettings className="text-[#c05e36] w-6 h-6" />
          </button>
          {isOpen && (
            <div
              className="absolute md:right-16 lg:right-5  md:top-24 lg:top-16 w-64 bg-white shadow-lg rounded-lg p-4 z-50"
              ref={(el) => (dropdownRefs.current = el)}
            >
              {/* Menu Content */}
              <ul className="mt-2 space-y-5 flex flex-col">
                
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
                
              </ul>
            </div>
          )}
        </div>
        <div className="hidden xs:flex sm:flex md:hidden">
          <button onClick={toggleSidebar}>
            <RiMenu2Line className="text-[#c05e36] w-5 h-5 me-5" />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
