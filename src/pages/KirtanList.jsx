import React, { useState } from "react";
import { kirtans } from "./kirtan";
import { Link } from "react-router-dom";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function KirtanList() {
  const [selectedLetter, setSelectedLetter] = useState("");

  const filteredKirtans =
    selectedLetter === ""
      ? kirtans
      : kirtans.filter((kirtan) => kirtan.letter === selectedLetter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:h-[450px] xs:h-[400px] md:h-[600px] lg:h-[480px]">
      <div className="w-full flex xs:gap-3 sm:gap-5">
        {/* A-Z Buttons */}
        <div className="flex flex-wrap gap-2 w-[50px] sm:h-[450px] xs:h-[400px] md:h-[600px] lg:h-[480px] bg-slate-200 py-2 rounded-full overflow-y-auto hide-scrollbar justify-center">
          <button
            onClick={() => setSelectedLetter("")}
            className={`px-3 py-1 rounded-full border ${
              selectedLetter === ""
                ? "bg-white text-black"
                : "bg-white text-black"
            } hover:bg-[#c05e36] hover:text-white transition`}
          >
            All
          </button>
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`px-3 py-1 rounded-full border ${
                selectedLetter === letter
                  ? "bg-[#c05e36] text-white"
                  : "bg-white text-black"
              } hover:bg-[#c05e36] hover:text-white transition`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Kirtan List */}
        <div className="space-y-2 w-[96%] md:h-[600px] sm:h-[450px] xs:h-[400px] lg:h-[480px] overflow-y-scroll hide-scrollbar ">
          {filteredKirtans.length > 0 ? (
            filteredKirtans.map((kirtan, index) => (
              <div key={index} className="p-4 bg-white rounded">
                <Link
                  className="flex justify-between"
                  to={`/kirtan/${kirtan.id}`}
                >
                  <div>
                    <h2 className="font-semibold pe-3 truncate whitespace-nowrap overflow-hidden max-w-[150px] lg:max-w-[500px] xs:pe-4 sm:pe-0 sm:max-w-[200px] md:max-w-[300px]">
                      {kirtan.title}
                    </h2>

                    <p className="text-sm text-gray-600">{kirtan.author}</p>
                  </div>
                  <div className="bg-slate-200 w-24 h-6 rounded-full flex items-center justify-center">
                    <span>5</span>/<span>5</span>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No kirtans found for "{selectedLetter}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
