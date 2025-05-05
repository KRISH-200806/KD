// AlphabetScroll.js
import React from "react";

const gujaratiAlphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const AlphabetScroll = ({ onLetterClick, selectedLetter }) => {
  return (
    <div className="hidden xs:hidden sm:flex">
      <div className="flex flex-wrap gap-2 rounded-full w-[50px] bg-slate-200 py-2 overflow-y-scroll hide-scrollbar justify-center h-[80vh] sticky z-30 top-0">
        {gujaratiAlphabets.map((letter) => (
          <button
            key={letter}
            onClick={() => onLetterClick(letter)}
            className={`w-8 h-8 rounded-full my-1 flex items-center justify-center 
              ${
                selectedLetter === letter
                  ? "bg-[#c05e36] text-white"
                  : "hover:bg-[#c05e36] hover:text-white"
              }`}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlphabetScroll;
