// import React from "react";
// import DoctorCard from "./DoctorCard";
// import { useSearchParams } from "react-router-dom";
// import { applyFilters } from "../utils";

// function DoctorList({ doctors }) {
//   const [searchParams] = useSearchParams();
//   const filtered = applyFilters(doctors, searchParams);

//   return (
//     <div className="doctor-list">
//       {filtered.map((doc) => (
//         <DoctorCard key={doc.id} doctor={doc} />
//       ))}
//     </div>
//   );
// }

// export default DoctorList;
import React from "react";
import DoctorCard from "./DoctorCard";

export default function DoctorList({ doctors }) {
  return (
    <div className="doctor-list">
      {doctors.map((doc, idx) => (
        <DoctorCard key={idx} doctor={doc} />
      ))}
    </div>
  );
}
