import React from "react";
import "./DoctorCard.css";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card" data-testid="doctor-card">
      <img src={doctor.photo} alt={doctor.name} width="100" />
      <h4 data-testid="doctor-name">{doctor.name}</h4>
      <p data-testid="doctor-specialty">
        {doctor.specialities.map((s) => s.name).join(", ")}
      </p>
      <p data-testid="doctor-experience">{doctor.experience}</p>
      <p data-testid="doctor-fee">{doctor.fees}</p>
    </div>
  );
}

export default DoctorCard;
