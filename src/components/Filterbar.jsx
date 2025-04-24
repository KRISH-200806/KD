import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineAudio } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";

function Filterbar({ filterOptions, handleSelect }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selected, setSelected] = useState([]);
  const dropdownRefs = useRef({});
  const dropdownMenuRefs = useRef({});

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

  useEffect(() => {
    if (openDropdown) {
      const categoryElement = dropdownRefs.current[openDropdown];
      const dropdownMenuElement = dropdownMenuRefs.current[openDropdown];

      if (categoryElement && dropdownMenuElement) {
        const rect = categoryElement.getBoundingClientRect();
        const menuRect = dropdownMenuElement.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let newLeft = rect.left;
        let newTop = rect.bottom + window.scrollY;

        // Check if the dropdown goes beyond the right edge of the viewport
        if (menuRect.width + rect.left > viewportWidth) {
          newLeft = viewportWidth - menuRect.width - 10;
        }
        newLeft = Math.max(0, newLeft);

        // Check if the dropdown goes beyond the bottom edge of the viewport
        if (menuRect.height + newTop > viewportHeight) {
          // If it goes beyond, position it above the category button
          newTop = rect.top - menuRect.height - 10;
        }

        dropdownMenuElement.style.left = `${newLeft}px`;
        dropdownMenuElement.style.top = `${newTop}px`;
        dropdownMenuElement.style.width = `${Math.max(100, rect.width)}px`;
      }
    }
  }, [openDropdown]);

  const handleOptionSelect = (category, option) => {
    const newSelection = { category, option };
    setSelected((prevSelected) => {
      // Check if the option is already selected to avoid duplicates
      if (
        !prevSelected.some(
          (item) =>
            item.category === newSelection.category &&
            item.option === newSelection.option
        )
      ) {
        return [...prevSelected, newSelection];
      }
      return prevSelected;
    });
    setOpenDropdown(null); // Close the dropdown after selection
    if (handleSelect) {
      handleSelect(category, option); // Call the parent's handler if provided
    }
  };

  const removeTag = (itemToRemove) => {
    setSelected((prevSelected) =>
      prevSelected.filter(
        (item) =>
          item.category !== itemToRemove.category ||
          item.option !== itemToRemove.option
      )
    );
    // If you need to inform the parent about the removal, you can add a callback here
  };

  return (
    <div className="bg-[#f8f1ee] pt-6 pb-4 px-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 bg-white py-2 rounded-full shadow-sm">
        <div className="w-5 h-5 text-[#c05e36] hover:scale-110 transition-transform duration-200 cursor-pointer">
          <IoSearchOutline className="w-5 h-5" />
        </div>

        <div className="w-[95%]">
          <input
            type="text"
            placeholder="કિર્તન શોધો"
            className="bg-transparent outline-none w-[95%] text-[#c05e36] placeholder-[#c05e36] focus:ring-0 xs:ps-4 sm:ps-2"
          />
        </div>

        <div className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#c05e36]/20">
          <AiOutlineAudio className="w-5 h-5 text-[#c05e36]" />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-5">
        {/* Dropdowns Row */}

        <div className="flex z-50 gap-4 xs:overflow-x-auto sm:overflow-x-auto whitespace-nowrap hide-scrollbar">
          {Object.entries(filterOptions).map(([category, options]) => (
            <div
              key={category}
              className=""
              ref={(el) => (dropdownRefs.current[category] = el)}
            >
              <div
                className="px-5 py-2 cursor-pointer text-sm font-semibold transition duration-200 hover:bg-white rounded-full"
                onClick={() =>
                  setOpenDropdown(openDropdown === category ? null : category)
                }
              >
                {category}
              </div>

              {openDropdown === category && (
                <div
                  ref={(el) => (dropdownMenuRefs.current[category] = el)}
                  className="absolute z-50 mt-2 bg-white border border-gray-300 rounded-md whitespace-nowrap shadow-md max-h-40 overflow-y-auto"
                  style={{ left: 0, top: "100%", minWidth: "100px" }}
                >
                  {options.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => handleOptionSelect(category, option)}
                      className="px-2 py-1 text-sm rounded-full cursor-pointer hover:bg-[#c05e36]/10"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {selected.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white hover:bg-gray-100 border border-gray-300 px-3 py-1 rounded-full text-sm shadow-sm"
            >
              <span>{item.option}</span>
              <button
                onClick={() => removeTag(item)}
                className="text-black bg-gray-200 rounded-full"
              >
                <BsXLg className="m-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filterbar;
