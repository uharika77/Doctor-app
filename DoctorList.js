import React from "react";
import DoctorCard from "./DoctorCard";
import "../App.css";

const DoctorList = ({ doctors }) => {
  return (
    <div className="doctor-list-container">
      {doctors.length === 0 ? (
        <p>No doctors found.</p>
      ) : (
        doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))
      )}
    </div>
  );
};

export default DoctorList;
