import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Header";
import AlphabetScroll from "../components/AlphFiter";
import KirtanList from "../components/KirtanList";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Filterbar from "../components/Filterbar";
import FilterModel from "../components/FilterModel";

function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  // Function to open modal
  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // Function to close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Add event listener when modal is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="h-screen">
      <Navbar
        className="sticky z-50 top-0"
        isOpenSidebar={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar isOpenSidebar={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="w-full h-[80vh] bg-[#f8f1ee] overflow-y-scroll hide-scrollbar ">
        <Searchbar />
        <hr className="h-[2px] w-full max-w-7xl mx-auto bg-slate-200" />
        <div className="flex flex-1 w-full max-w-7xl mx-auto mt-5">
          <Filterbar />
          <div className="w-full max-w-7xl">
            <div className="bg-slate-200 w-full max-w-[60rem] rounded-full mx-auto h-10 sticky z-30 top-0"></div>
            <KirtanList />
          </div>
          <AlphabetScroll />
        </div>
      </div>

     

      <Footer />
    </div>
  );
}

export default HomePage;
