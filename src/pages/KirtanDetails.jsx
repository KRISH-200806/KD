import React from "react";
import { useParams } from "react-router-dom";
import { kirtans } from "./kirtan";
import Navbar from "../components/Navbar";
import { FaRegStar } from "react-icons/fa";
import {Link} from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";


export default function KirtanDetail() {
  const { id } = useParams();
  const kirtan = kirtans.find((item) => item.id === parseInt(id));

  if (!kirtan) {
    return (
      <div className="p-4 text-center text-red-500">Kirtan not found!</div>
    );
  }

  return (
    <div className="bg-[#f8f1ee] min-h-screen ">
      <div>
        <Navbar />
      </div>
      <div className="max-w-7xl w-full mx-auto mt-5 px-4">
        <div className="flex justify-evenly items-center">
          <Link
            to="/"
            className="xs:p-2 sm:p-0 sm:w-7 sm:h-7 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#c05e36]/20"
          >
            <BsArrowLeft className="w-5 h-5 text-[#c05e36]" />
          </Link>
          <h1 className="xs:text-xl sm:text-2xl font-bold text-[#c05e36] text-center m-auto">
            {kirtan.title}
          </h1>
          <span className="flex float-end">
            <FaRegStar className="text-[#c05e36] w-5 h-5" />
          </span>
        </div>
        <div className="flex bg-[#c05e36] p-1 rounded-full mt-5 gap-5 xs:overflow-x-auto sm:overflow-x-auto whitespace-nowrap hide-scrollbar">
          <span className="px-5 py-2 cursor-pointer bg-white text-sm font-semibold transition duration-200 hover:bg-[#FFF4EF] rounded-full">
            pad-2
          </span>
          <span className="px-5 py-2 cursor-pointer bg-white text-sm font-semibold transition duration-200 hover:bg-[#FFF4EF] rounded-full">
            pad-2
          </span>
          <span className="px-5 py-2 cursor-pointer bg-white text-sm font-semibold transition duration-200 hover:bg-[#FFF4EF] rounded-full">
            pad-2
          </span>
          <span className="px-5 py-2 cursor-pointer bg-white text-sm font-semibold transition duration-200 hover:bg-[#FFF4EF] rounded-full">
            pad-2
          </span>
          <span className="px-5 py-2 cursor-pointer bg-white text-sm font-semibold transition duration-200 hover:bg-[#FFF4EF] rounded-full">
            pad-2
          </span>
          <span className="px-5 py-2 cursor-pointer bg-white text-sm font-semibold transition duration-200 hover:bg-[#FFF4EF] rounded-full">
            pad-2
          </span>
        </div>
        <div className="max-w-7xl w-full mx-auto mt-5 bg-white rounded-2xl">
          <p className="font-normal text-justify flex justify-center md:w-2/3 md:mx-auto p-6">
            ધન્ય ધન્ય ઓઝત ધન્ય ધન્ય છે રે એના જેવું તીરથ કોણ અન્ય છે રે. ટેક.
            <br />
            મેતા નરસીંહનો સુત રવજી કહું રે તેને શ્રીજીએ કરાવી સમાધી બહુરે. ધન્ય.
            ૧<br />
            રાખી એને ઓઝત તણી તીરમાં રે ફેરવે છે ચારેકોર નીરમાં રે. ધન્ય. ર<br />
            એમ રવજી ઉપર રંગ ઢાળીઓ રે સમાધીનો અતિ રેડ વાળીયો રે. ધન્ય. ૩<br />
            જેમાં નાયા હશે હીલોળા દૈ દઇ રે ગાયા કીર્તન ત્યાં તાળયું લઇ લઇ રે.
            ધન્ય. ૪<br />
            જગદીશ કહે એમ ઓઝતે ઘણી રે કરી હરિએ લીલા ન જાયે ગણી રે. ધન્ય. પ
          </p>
        </div>
      </div>
    </div>
  );
}
