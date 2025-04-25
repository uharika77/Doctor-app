import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import SortOptions from "../components/SortOptions";
import DoctorCard from "../components/DoctorCard";
import "./DoctorListPage.css";

function DoctorListPage({ doctorData }) {
  const [filteredDoctors, setFilteredDoctors] = useState(doctorData);
  const [searchTerm, setSearchTerm] = useState("");
  const [specialties, setSpecialties] = useState([]);
  const [mode, setMode] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    let filtered = [...doctorData];

    if (searchTerm) {
      filtered = filtered.filter((doc) =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (specialties.length > 0) {
      filtered = filtered.filter((doc) =>
        doc.specialities.some((spec) => specialties.includes(spec.name))
      );
    }

    if (mode === "video") {
      filtered = filtered.filter((doc) => doc.video_consult);
    } else if (mode === "clinic") {
      filtered = filtered.filter((doc) => doc.in_clinic);
    }

    if (sortBy === "fees") {
      filtered.sort(
        (a, b) =>
          parseInt(a.fees.replace("₹", "").trim()) -
          parseInt(b.fees.replace("₹", "").trim())
      );
    } else if (sortBy === "experience") {
      filtered.sort(
        (a, b) =>
          parseInt(b.experience) - parseInt(a.experience)
      );
    }

    setFilteredDoctors(filtered);
  }, [searchTerm, specialties, mode, sortBy, doctorData]);

  return (
    <div className="doctor-list-container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="main-content">
        <FilterPanel
          specialties={specialties}
          setSpecialties={setSpecialties}
          mode={mode}
          setMode={setMode}
        />
        <div className="right-section">
          <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
          <div className="doctor-cards">
            {filteredDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorListPage;
