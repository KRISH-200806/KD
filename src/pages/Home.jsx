import React from "react";
import Navbar from "../components/Navbar";
import Filterbar from "../components/Filterbar";
import KirtanList from "./KirtanList";
import Footer from "../components/Footer";

const filterOptions = {
  રચિયતા: [
    "ગોસ્પામી",
    "મુખેશભાઈ",
    "પ્રેમાનંદ",
    "ગોસ્પામી",
    "મુખેશભાઈ",
    "પ્રેમાનંદ",
    "ગોસ્પામી",
    "મુખેશભાઈ",
    "પ્રેમાનંદ",
  ],
  પ્રસંગ: ["જનમોત્સવ", "અનંત ચતુર્દશી", "શિબિર"],
  સ્થાન: ["ગઢપુર", "વીરપુર", "ભૂજ"],
  "કીર્તન પ્રકાર": ["પ્રાર્થના", "ભાવપર્ણ", "સંતવાણી"],
  વિશેષણ: ["મીઠું", "મધુર", "વિચિત્ર"],
  "વિશેષ નામ": ["ઘનશ્યામ", "નારાયણ", "હરિપ્રસાદ"],
  પુસ્તક: ["ભાગવત", "વચનામૃત", "સત્સંગી જીવન"],
  ભાવ: ["સ્નેહ", "શાંતિ", "ભક્તિ"],
};

function Home() {
  return (
    <div className="bg-[#f8f1ee] min-h-screen">
      <div className="sticky top-0 z-50 bg-[#f8f1ee]">
        <Navbar />
      </div>

      <div className="">
        <div className="">
          <Filterbar filterOptions={filterOptions} />
          <hr className="max-w-7xl mx-auto bg-slate-300 h-[2px]" />
        </div>
        {/* <div className="sticky z-50 top-0 h-12 bg-[#f8f1ee]">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="ps-8">A</h1>
          </div>
        </div> */}

        <div className="pt-8">
          <KirtanList />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
