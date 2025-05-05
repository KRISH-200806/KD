import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const KirtanList = () => {
  const [kirtans, setKirtans] = useState([]);

  const getKirtanList = async () => {
    try {
      const response = await axios.get(
        "https://kirtanavali.ssgd.org/api/get-kirtans"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getKirtanList();
  }, []);

  return (
    <div className="flex-1">
      <div className="p-4">
        <ul className="divide-y divide-gray-200 space-y-2">
          {kirtans.map((kirtan) => (
            <div key={kirtan.id} className="p-4 bg-white rounded">
              <Link
                className="xs:block sm:block md:flex md:justify-between"
                to={`/kirtan/${kirtan.id}`}
              >
                <div className="flex">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    {kirtan.type}
                  </div>
                  <div>
                    <h2 className="font-gujarati2 pe-3 truncate whitespace-nowrap overflow-hidden max-w-[250px] lg:max-w-[500px] xs:pe-4 sm:pe-0 sm:max-w-[200px] md:max-w-[300px]">
                      {kirtan.title}
                    </h2>
                    <p className="text-sm text-gray-600">{kirtan.author}</p>
                  </div>
                </div>
                <div className="bg-slate-200 w-24 h-6 rounded-full flex items-center justify-center xs:mt-2 xs:ms-11 sm:ms-0 sm:mt-0">
                  {kirtan.current_pad}/{kirtan.total_pads}
                </div>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KirtanList;
