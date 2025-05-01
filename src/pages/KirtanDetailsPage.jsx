import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Header";

import { BsArrowLeft } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import Footer from "../components/Footer";
import axios from "axios";

function KirtanDetailsPage() {
  const { id } = useParams();
  const [singlekirtan, setSinglekirtan] = useState(null);
  const [activePad, setActivePad] = useState(1);
  const [loading, setLoading] = useState(true);
  const [currentContent, setCurrentContent] = useState("");
  useEffect(() => {
    const fetchKirtan = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:3000/kirtans/${id}`);
        console.log(res.data);
        setSinglekirtan(res.data);
        setCurrentContent(res.data.song); // song key પરથી value શરુમાં બતાવવી
        setActivePad(res.data.current_pad); // default pad
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchKirtan();
  }, [id]);

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (!singlekirtan) {
    return (
      <div className="p-4 text-center text-red-500">Kirtan not found!</div>
    );
  }

  // Parse the count to get total number of pads
  const totalPads = singlekirtan.total_pads;
  const currentPad = singlekirtan.current_pad;

const handlePadChange = (padNumber) => {
  setActivePad(padNumber);
  if (singlekirtan?.pad_content?.[padNumber - 1]) {
    setCurrentContent(singlekirtan.pad_content[padNumber - 1]);
  }
};

  // Generate pad buttons dynamically
  const renderPadButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPads; i++) {
      buttons.push(
        <span
          key={i}
          className={`px-5 py-2 cursor-pointer ${
            activePad === i ? "bg-[#FFF4EF]" : "bg-white"
          } text-sm font-semibold transition duration-200 hover:bg-[#FFF4EF] rounded-full`}
          onClick={() => handlePadChange(i)}
        >
          પદ-{i}
        </span>
      );
    }
    return buttons;
  };

  return (
    <div className="bg-[#f8f1ee] min-h-screen">
      <div>
        <Navbar />
      </div>
      <div className="max-w-7xl w-full mx-auto mt-5 px-4 mb-8">
        <div className="flex justify-evenly items-center">
          <Link
            to="/"
            className="xs:p-2 sm:p-0 sm:w-7 sm:h-7 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#c05e36]/20"
          >
            <BsArrowLeft className="w-5 h-5 text-[#c05e36]" />
          </Link>
          <h1 className="xs:text-xl sm:text-2xl font-bold text-[#c05e36] text-center m-auto">
            {singlekirtan.title}
          </h1>
          <span className="flex float-end">
            <FaRegStar className="text-[#c05e36] w-5 h-5" />
          </span>
        </div>
        <div className="flex bg-[#c05e36] p-1 rounded-full mt-5 gap-5 xs:overflow-x-auto sm:overflow-x-auto whitespace-nowrap hide-scrollbar">
          {renderPadButtons()}
        </div>
        <div className="max-w-7xl w-full mx-auto mt-5 bg-white rounded-2xl">
          <p className="font-gujarati2 text-2xl text-justify flex justify-center md:w-2/3 md:mx-auto p-6">
            {singlekirtan.song && currentContent}
          </p>
        </div>
        <div className="grid sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div className="bg-white w-full py-2 flex rounded shadow-md px-3">
            <div>
              <img src="#" alt="" />
            </div>
            <div>
              <p>રચિયતા : - {singlekirtan.author} </p>
            </div>
          </div>
          <div className="bg-white w-full py-2 flex rounded shadow-md px-3">
            <div>
              <img src="#" alt="" />
            </div>
            <div>
              <p> પ્રસંગ: - {singlekirtan.author} </p>
            </div>
          </div>
          <div className="bg-white w-full py-2 flex rounded shadow-md px-3">
            <div>
              <img src="#" alt="" />
            </div>
            <div>
              <p>સ્થાન : - {singlekirtan.author} </p>
            </div>
          </div>
          <div className="bg-white w-full py-2 flex rounded shadow-md px-3">
            <div>
              <img src="#" alt="" />
            </div>
            <div>
              <p>કીર્તન પ્રકાર : - {singlekirtan.author} </p>
            </div>
          </div>
          <div className="bg-white w-full py-2 flex rounded shadow-md px-3">
            <div>
              <img src="#" alt="" />
            </div>
            <div>
              <p>વિશેષણ : - {singlekirtan.author} </p>
            </div>
          </div>
          <div className="bg-white w-full py-2 flex rounded shadow-md px-3">
            <div>
              <img src="#" alt="" />
            </div>
            <div>
              <p>વિશેષ નામ : - {singlekirtan.author} </p>
            </div>
          </div>
          <div className="bg-white w-full py-2 flex rounded shadow-md px-3">
            <div>
              <img src="#" alt="" />
            </div>
            <div>
              <p>પુસ્તક : - {singlekirtan.author} </p>
            </div>
          </div>
          <div className="bg-white w-full py-2 flex rounded shadow-md px-3">
            <div>
              <img src="#" alt="" />
            </div>
            <div>
              <p>ભાવ : - {singlekirtan.author} </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default KirtanDetailsPage;
