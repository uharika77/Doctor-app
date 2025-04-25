
import React, { useEffect, useState } from "react";
import Autocomplete from "./components/Autocomplete";
import FilterPanel from "./components/FilterPanel";
import DoctorList from "./components/DoctorList";
import { useSearchParams } from "react-router-dom";

const API_URL = "https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json";

function App() {
  const [doctors, setDoctors] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div className="app">
      <Autocomplete doctors={doctors} setSearchParams={setSearchParams} />
      <div className="main-content">
        <FilterPanel setSearchParams={setSearchParams} />
        <DoctorList doctors={doctors} />
      </div>
    </div>
  );
}

export default App;
// import React, { useEffect, useState } from "react";
// import Autocomplete from "./components/Autocomplete";
// import FilterPanel from "./components/FilterPanel";
// import DoctorList from "./components/DoctorList";
// import { applyFilters } from "./utils";
// import "./App.css";

// const API_URL = "https://doc-search-api.onrender.com/doctors";

// function App() {
//   const [doctors, setDoctors] = useState([]);
//   const [filteredDoctors, setFilteredDoctors] = useState([]);
//   const [searchParams, setSearchParams] = useState(new URLSearchParams());

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => setDoctors(data))
//       .catch((err) => console.error("Failed to fetch doctors:", err));
//   }, []);

//   useEffect(() => {
//     const filtered = applyFilters(doctors, searchParams);
//     setFilteredDoctors(filtered);
//   }, [doctors, searchParams]);

//   const handleSearch = (term) => {
//     const newParams = new URLSearchParams(searchParams);
//     if (term) newParams.set("search", term);
//     else newParams.delete("search");
//     setSearchParams(newParams);
//   };

//   const handleFilterChange = (key, value, checked) => {
//     const newParams = new URLSearchParams(searchParams);
//     if (key === "specialties") {
//       const values = newParams.getAll(key);
//       if (checked) {
//         newParams.append(key, value);
//       } else {
//         const updated = values.filter((v) => v !== value);
//         newParams.delete(key);
//         updated.forEach((v) => newParams.append(key, v));
//       }
//     } else {
//       if (checked) newParams.set(key, value);
//       else newParams.delete(key);
//     }
//     setSearchParams(newParams);
//   };

//   const handleSortChange = (sortKey) => {
//     const newParams = new URLSearchParams(searchParams);
//     if (sortKey) newParams.set("sort", sortKey);
//     else newParams.delete("sort");
//     setSearchParams(newParams);
//   };

//   return (
//     <div className="app-container">
//       <div className="filter-panel">
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search doctors..."
//           onChange={(e) => handleSearch(e.target.value)}
//         />
//         <FilterPanel
//           filters={searchParams}
//           onFilterChange={handleFilterChange}
//           onSortChange={handleSortChange}
//         />
//       </div>
//       <DoctorList doctors={filteredDoctors} />
//     </div>
//   );
// }

// export default App;
