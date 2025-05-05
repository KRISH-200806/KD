import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Header";
import AlphabetScroll from "../components/AlphFiter";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import Filterbar from "../components/Filterbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// Import icons for pagination
const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const [kirtans, setKirtans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({});
   const [selectedLetter, setSelectedLetter] = useState("");

  const itemsPerPage = 30;
  const getKirtanList = async (page = 1, filters = {}, selectedLetter = "") => {
    try {
      setLoading(true);

      // Build query string manually with multiple sub_category_code values
      let query = `?page=${page}&limit=${itemsPerPage}`;
      const subCategoryCodes = Object.values(filters).filter(Boolean);
      for (const code of subCategoryCodes) {
        query += `&category_id=${code}`;
      }
      if (selectedLetter) {
        query += `&letter=${selectedLetter}`;
      }
      const response = await axios.get(
        `https://kirtanavali.ssgd.org/api/get-kirtans${query}`
      );

      const data = response.data.response;
      setKirtans(data.kirtans);
      console.log(data);
      const total = data.pagination.total || data.kirtans.length;
      setTotalItems(total);
      setTotalPages(Math.ceil(total / itemsPerPage));

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

 useEffect(() => {
   getKirtanList(currentPage, selectedFilters, selectedLetter);
 }, [currentPage, selectedFilters, selectedLetter]);

console.log(selectedLetter);
  const handlePageChange = (newPage) => {
    console.log("Changing to page:", newPage);
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo(0, 0); // Scroll to top when page changes
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = 1;
    let endPage = totalPages;

    // Logic for showing a limited number of pages with ellipsis
    if (totalPages > 7) {
      if (currentPage <= 4) {
        // Show 1, 2, 3, 4, 5, ..., totalPages
        endPage = 5;
        pageNumbers.push(
          ...Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
          )
        );
        pageNumbers.push("ellipsis");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Show 1, ..., totalPages-4, totalPages-3, totalPages-2, totalPages-1, totalPages
        startPage = totalPages - 4;
        pageNumbers.push(1);
        pageNumbers.push("ellipsis");
        pageNumbers.push(
          ...Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
          )
        );
      } else {
        // Show 1, ..., currentPage-1, currentPage, currentPage+1, ..., totalPages
        pageNumbers.push(1);
        pageNumbers.push("ellipsis");
        pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
        pageNumbers.push("ellipsis");
        pageNumbers.push(totalPages);
      }
    } else {
      // If fewer pages, show all
      pageNumbers.push(
        ...Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        )
      );
    }

    return pageNumbers;
  };

  // Calculate display range for "Showing X to Y of Z results"
  const getDisplayRange = () => {
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.max(currentPage * itemsPerPage, totalItems);
    return { start, end };
  };

  return (
    <div className="flex flex-col">
      <Navbar
        className="sticky z-50 top-0"
        isOpenSidebar={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar isOpenSidebar={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="w-full flex-grow bg-[#f8f1ee] overflow-y-auto h-[80vh] hide-scrollbar">
        <Searchbar />
        <hr className="h-[2px] w-full max-w-7xl mx-auto bg-slate-200" />
        <Filterbar
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        <div className="flex flex-1 w-full max-w-7xl mx-auto mt-5">
          <div className="w-full">
            <div className="bg-slate-200 w-full max-w-[80rem] rounded-full mx-auto h-10 sticky z-30 top-0"></div>

            <div className="p-4">
              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
              ) : kirtans.length === 0 ? (
                <div className="text-center py-8">No kirtans found</div>
              ) : (
                <ul className="divide-y divide-gray-200 space-y-2">
                  {kirtans.map((kirtan) => (
                    <div key={kirtan.id} className="p-4 bg-white rounded">
                      <Link
                        className="xs:block sm:block md:flex md:justify-between"
                        to={`/kirtan/${kirtan.song_code}`}
                      >
                        <div className="flex">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                            {kirtan.first_character}
                          </div>
                          <div>
                            <h2 className="font-gujarati2 pe-3 truncate whitespace-nowrap overflow-hidden max-w-[250px] lg:max-w-[500px] xs:pe-4 sm:pe-0 sm:max-w-[200px] md:max-w-[300px]">
                              {kirtan.title}
                            </h2>
                            <p className="text-sm text-gray-600">
                              {kirtan.author_name}
                            </p>
                          </div>
                        </div>
                        <div className="bg-slate-200 w-24 h-6 rounded-full flex items-center justify-center xs:mt-2 xs:ms-11 sm:ms-0 sm:mt-0">
                          {kirtan.current_pad}/{kirtan.total_pads}
                        </div>
                      </Link>
                    </div>
                  ))}
                </ul>
              )}
            </div>

            {/* Tailwind Pagination Component */}
          </div>
          <AlphabetScroll
            onLetterClick={(letter) => {
              setCurrentPage(1); // Reset to first page when letter changes
              setSelectedLetter(letter);
            }}
            selectedLetter={selectedLetter}
          />
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto">
        {!loading && totalPages > 0 && (
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mb-8">
            <div className="flex flex-1 justify-between sm:hidden">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${
                  currentPage === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${
                  currentPage === totalPages
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Next
              </button>
            </div>

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">{getDisplayRange().start}</span>{" "}
                  to{" "}
                  <span className="font-medium">{getDisplayRange().end}</span>{" "}
                  of <span className="font-medium">{totalItems}</span> results
                </p>
              </div>

              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 ${
                      currentPage === 1
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon />
                  </button>

                  {getPageNumbers().map((page, index) => {
                    if (page === "ellipsis") {
                      return (
                        <span
                          key={`ellipsis-${index}`}
                          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                        >
                          ...
                        </span>
                      );
                    }

                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                          currentPage === page
                            ? "z-10 bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        }`}
                        aria-current={currentPage === page ? "page" : undefined}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 ${
                      currentPage === totalPages
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
