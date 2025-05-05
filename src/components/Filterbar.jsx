// import axios from "axios";
// import { useState, useEffect } from "react";
// import { X } from "lucide-react";

// function Filterbar({ selectedFilters, setSelectedFilters }) {
//   const [apiData, setApiData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           "https://kirtanavali.ssgd.org/api/category-data"
//         );
//         const data = response.data.response.data;
//         setApiData(data);

//         // Initialize selectedFilters object with empty values
//        const initialFilters = {};
//        for (const key of Object.keys(data)) {
//          initialFilters[key] = selectedFilters[key] || "";
//        }
//        setSelectedFilters(initialFilters);

//         setLoading(false);
//       } catch (err) {
//         setError("Error fetching data", err);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleFilterChange = (categoryCode, value) => {
//     setSelectedFilters((prev) => ({
//       ...prev,
//       [categoryCode]: value,
//     }));
//   };

//   const removeFilter = (categoryCode) => {
//     setSelectedFilters((prev) => ({
//       ...prev,
//       [categoryCode]: "",
//     }));
//   };

//   const getSubCategoryName = (categoryCode, subCategoryCode) => {
//     const subCategory = apiData[categoryCode]?.subcategories.find(
//       (sc) => sc.sub_category_code === subCategoryCode
//     );
//     return subCategory?.sub_category_name || "";
//   };

//   if (loading) return <div className="text-center p-4">Loading...</div>;
//   if (error) return <div className="text-center p-4 text-red-600">{error}</div>;

//   return (
//     <div className="max-w-7xl w-full mx-auto mt-5">
//       {/* Dynamic Select Boxes */}
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-5 mb-6">
//         {Object.entries(apiData).map(([categoryCode, categoryData]) => (
//           <div className="w-full" key={categoryCode}>
//             <select
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={selectedFilters[categoryCode] || ""}
//               onChange={(e) => handleFilterChange(categoryCode, e.target.value)}
//             >
//               <option value="">{categoryData.category_name}</option>
//               {categoryData.subcategories.map((subCategory) => (
//                 <option
//                   key={subCategory.sub_category_code}
//                   value={subCategory.sub_category_code}
//                 >
//                   {subCategory.sub_category_name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         ))}
//       </div>

//       {/* Selected Filters Display */}
//       <div className="flex flex-wrap gap-2 mt-4">
//         {Object.entries(selectedFilters).map(
//           ([categoryCode, subCategoryCode]) =>
//             subCategoryCode ? (
//               <div
//                 key={categoryCode}
//                 className="flex items-center bg-blue-100 px-3 py-1 rounded-full text-sm"
//               >
//                 <span className="mr-2">
//                   {getSubCategoryName(categoryCode, subCategoryCode)}
//                 </span>
//                 <button
//                   onClick={() => removeFilter(categoryCode)}
//                   className="text-gray-600 hover:text-red-600 focus:outline-none"
//                   aria-label="Remove filter"
//                 >
//                   <X size={16} />
//                 </button>
//               </div>
//             ) : null
//         )}
//       </div>
//     </div>
//   );
// }

// export default Filterbar;
import axios from "axios";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

function Filterbar({ selectedFilters, setSelectedFilters }) {
  const [apiData, setApiData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://kirtanavali.ssgd.org/api/category-data"
        );
        const data = response.data.response.data;
        setApiData(data);

        const initialFilters = {};
        for (const key of Object.keys(data)) {
          initialFilters[key] = selectedFilters[key] || "";
        }
        setSelectedFilters(initialFilters);
        setLoading(false);
      } catch (err) {
        setError("Error fetching filter data.",err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (categoryCode, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [categoryCode]: value,
    }));
  };

  const removeFilter = (categoryCode) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [categoryCode]: "",
    }));
  };

  const getSubCategoryName = (categoryCode, subCategoryCode) => {
    const subCategory = apiData[categoryCode]?.subcategories.find(
      (sc) => sc.sub_category_code === subCategoryCode
    );
    return subCategory?.sub_category_name || "";
  };

  if (loading) return <div className="text-center p-4">Loading filters...</div>;
  if (error) return <div className="text-center p-4 text-red-600">{error}</div>;

  return (
    <div className="max-w-7xl w-full mx-auto mt-5">
      {/* Select Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 mb-6">
        {Object.entries(apiData).map(([categoryCode, categoryData]) => (
          <div className="w-full" key={categoryCode}>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedFilters[categoryCode] || ""}
              onChange={(e) => handleFilterChange(categoryCode, e.target.value)}
            >
              <option value="">{categoryData.category_name}</option>
              {categoryData.subcategories.map((subCategory) => (
                <option
                  key={subCategory.sub_category_code}
                  value={subCategory.sub_category_code}
                >
                  {subCategory.sub_category_name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Active Filters Display */}
      <div className="flex flex-wrap gap-2 mt-4">
        {Object.entries(selectedFilters).map(
          ([categoryCode, subCategoryCode]) =>
            subCategoryCode && (
              <div
                key={categoryCode}
                className="flex items-center bg-blue-100 px-3 py-1 rounded-full text-sm"
              >
                <span className="mr-2">
                  {getSubCategoryName(categoryCode, subCategoryCode)}
                </span>
                <button
                  onClick={() => removeFilter(categoryCode)}
                  className="text-gray-600 hover:text-red-600 focus:outline-none"
                  aria-label="Remove filter"
                >
                  <X size={16} />
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Filterbar;
