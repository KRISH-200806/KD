import React from "react";

const gujaratiAlphabets = [
  "અ",
  "આ",
  "ઇ",
  "ઈ",
  "ઉ",
  "ઊ",
  "એ",
  "ઐ",
  "ઓ",
  "ઔ",
  "ક",
  "ખ",
  "ગ",
  "ઘ",
  "ચ",
  "છ",
  "જ",
  "ઝ",
  "ટ",
  "ઠ",
  "ડ",
  "ઢ",
  "ણ",
  "ત",
  "થ",
  "દ",
  "ધ",
  "ન",
  "પ",
  "ફ",
  "બ",
  "ભ",
  "મ",
  "ય",
  "ર",
  "લ",
  "ળ",
  "વ",
  "શ",
  "ષ",
  "સ",
  "હ",
  "ક્ષ",
  "જ્ઞ",
];



const AlphabetScroll = () => {
  
  return (
    <div className="hidden xs:hidden sm:flex">
      <div className="flex  flex-wrap gap-2 rounded-full w-[50px] bg-slate-200 py-2 overflow-y-scroll hide-scrollbar justify-center h-[80vh] sticky z-30 top-0">
        {gujaratiAlphabets.map((letter) => (
          <button
            key={letter}
            className="w-8 h-8 rounded-full my-1 flex items-center justify-center hover:bg-[#c05e36] hover:text-white"
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlphabetScroll;
