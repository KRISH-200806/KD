import React, { useState } from "react";

function FilterModel() {
  const locations = ["ગઢપુર", "વીરપુર", "ભૂજ"];
  const adjectives = ["મીઠું", "મધુર", "વિચિત્ર"];
  const specialNames = ["ઘનશ્યામ", "નારાયણ", "હરિપ્રસાદ"];
  const books = ["ભાગવત", "વચનામૃત", "સત્સંગી જીવન"];
  const emotions = ["સ્નેહ", "શાંતિ", "ભક્તિ"];

  const [activeAccordions, setActiveAccordions] = useState({
    creator: true,
    occasion: true,
    type: true,
    location: true,
    adjective: true,
    specialName: true,
    book: true,
    emotion: true,
  });

  const toggleAccordion = (section) => {
    setActiveAccordions((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <div className="w-80 h-[80vh] sticky top-0 z-30 bg-white shadow-xl p-2 rounded-lg">
      <div className="overflow-y-auto h-full hide-scrollbar ">
        {/* Creator Section */}
        <div className="border-b border-gray-200 mb-2">
          <div className="p-3 bg-[#f8f1ee]">
            <button
              onClick={() => toggleAccordion("creator")}
              className="w-full flex justify-between items-center text-left font-normal text-xl text-gray-800"
            >
              <span>રચયિતા</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  activeAccordions.creator ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {activeAccordions.creator && (
            <div className="px-3 py-3">
              <select className="w-full p-2 border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300">
                <option value="">બ્રહ્માનંદ સ્વામી</option>
                <option value="prem">પ્રેમાનંદ સ્વામી</option>
                <option value="mukta">મુક્તાનંદ સ્વામી</option>
                <option value="bhuma">ભૂમાનંદ સ્વામી</option>
                <option value="siddha">સિદ્ધાનંદ સ્વામી</option>
                <option value="deva">દેવાનંદ સ્વામી</option>
                <option value="avinash">અવિનાશાનંદ સ્વામી</option>
                <option value="manjuk">મંજુકેશાનંદ સ્વામી</option>
                <option value="daya">દયાનંદ સ્વામી</option>
                <option value="dharma">ધર્માનંદ સ્વામી</option>
                <option value="jagdish">જગદીશાનંદ સ્વામી</option>
                <option value="nishkul">નિષ્કુળાનંદ સ્વામી</option>
                <option value="krishna">કૃષ્ણાનંદ સ્વામી</option>
                <option value="purna">પૂર્ણાનંદ સ્વામી</option>
              </select>
            </div>
          )}
        </div>

        {/* Occasion Section */}
        <div className="border-b border-gray-200 mb-2">
          <div className="p-3 bg-[#f8f1ee]">
            <button
              onClick={() => toggleAccordion("occasion")}
              className="w-full flex justify-between items-center text-left font-normal text-xl text-gray-800"
            >
              <span>પ્રસંગ</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  activeAccordions.occasion ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {activeAccordions.occasion && (
            <div className="px-3 py-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="diwali"
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label
                    htmlFor="diwali"
                    className="ml-2 text-sm text-gray-700"
                  >
                    દિવાળી
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="holi"
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="holi" className="ml-2 text-sm text-gray-700">
                    હોળી
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="ekadashi"
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label
                    htmlFor="ekadashi"
                    className="ml-2 text-sm text-gray-700"
                  >
                    એકાદશી
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="hindola"
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label
                    htmlFor="hindola"
                    className="ml-2 text-sm text-gray-700"
                  >
                    હિંડોળા
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rangotsav"
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label
                    htmlFor="rangotsav"
                    className="ml-2 text-sm text-gray-700"
                  >
                    રંગોત્સવ
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Kirtan Type Section */}
        <div className="border-b border-gray-200 mb-2">
          <div className="p-3 bg-[#f8f1ee]">
            <button
              onClick={() => toggleAccordion("type")}
              className="w-full flex justify-between items-center text-left font-normal text-xl text-gray-800"
            >
              <span>કીર્તન પ્રકાર</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  activeAccordions.type ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {activeAccordions.type && (
            <div className="px-3 py-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="sakhi"
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="sakhi" className="ml-2 text-sm text-gray-700">
                    સાખી
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="chandravala"
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label
                    htmlFor="chandravala"
                    className="ml-2 text-sm text-gray-700"
                  >
                    ચંદ્રાવળા
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="duha"
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="duha" className="ml-2 text-sm text-gray-700">
                    દુહા-કુંડલીયા
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="chand"
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="chand" className="ml-2 text-sm text-gray-700">
                    છંદ
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* LOCATION SECTION */}
        <div className="border-b border-gray-200 mb-2">
          <div className="p-3 bg-[#f8f1ee]">
            <button
              onClick={() => toggleAccordion("location")}
              className="w-full flex justify-between items-center text-left font-normal text-xl text-gray-800"
            >
              <span>સ્થાન</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  activeAccordions.location ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {activeAccordions.location && (
            <div className="px-3 py-3">
              <div className="grid grid-cols-2 gap-2">
                {locations.map((location, index) => (
                  <div key={`location-${index}`} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`location-${index}`}
                      className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label
                      htmlFor={`location-${index}`}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {location}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ADJECTIVES SECTION */}
        <div className="border-b border-gray-200 mb-2">
          <div className="p-3 bg-[#f8f1ee]">
            <button
              onClick={() => toggleAccordion("adjective")}
              className="w-full flex justify-between items-center text-left font-normal text-xl text-gray-800"
            >
              <span>વિશેષણ</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  activeAccordions.adjective ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {activeAccordions.adjective && (
            <div className="px-3 py-3">
              <div className="grid grid-cols-2 gap-2">
                {adjectives.map((adjective, index) => (
                  <div key={`adjective-${index}`} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`adjective-${index}`}
                      className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label
                      htmlFor={`adjective-${index}`}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {adjective}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SPECIAL NAMES SECTION */}
        <div className="border-b border-gray-200 mb-2">
          <div className="p-3 bg-[#f8f1ee]">
            <button
              onClick={() => toggleAccordion("specialName")}
              className="w-full flex justify-between items-center text-left font-normal text-xl text-gray-800"
            >
              <span>વિશેષ નામ</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  activeAccordions.specialName ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {activeAccordions.specialName && (
            <div className="px-3 py-3">
              <div className="grid grid-cols-2 gap-2">
                {specialNames.map((name, index) => (
                  <div key={`name-${index}`} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`name-${index}`}
                      className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label
                      htmlFor={`name-${index}`}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* BOOKS SECTION */}
        <div className="border-b border-gray-200 mb-2">
          <div className="p-3 bg-[#f8f1ee]">
            <button
              onClick={() => toggleAccordion("book")}
              className="w-full flex justify-between items-center text-left font-normal text-xl text-gray-800"
            >
              <span>પુસ્તક</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  activeAccordions.book ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {activeAccordions.book && (
            <div className="px-3 py-3">
              <div className="grid grid-cols-2 gap-2">
                {books.map((book, index) => (
                  <div key={`book-${index}`} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`book-${index}`}
                      className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label
                      htmlFor={`book-${index}`}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {book}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* EMOTIONS SECTION */}
        <div className="border-b border-gray-200 mb-2">
          <div className="p-3 bg-[#f8f1ee]">
            <button
              onClick={() => toggleAccordion("emotion")}
              className="w-full flex justify-between items-center text-left font-normal text-xl text-gray-800"
            >
              <span>ભાવ</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  activeAccordions.emotion ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {activeAccordions.emotion && (
            <div className="px-3 py-3">
              <div className="grid grid-cols-2 gap-2">
                {emotions.map((emotion, index) => (
                  <div key={`emotion-${index}`} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`emotion-${index}`}
                      className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label
                      htmlFor={`emotion-${index}`}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {emotion}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterModel;
