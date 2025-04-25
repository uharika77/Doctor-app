import React from "react";

function DoctorCard({ doctor }) {
    return (
      <div className="doctor-card" data-testid="doctor-card">
        <div data-testid="doctor-name"><strong>{doctor.name}</strong></div>
        <div data-testid="doctor-specialty">
          {Array.isArray(doctor.specialties) ? doctor.specialties.join(", ") : "No specialties listed"}
        </div>
        <div data-testid="doctor-experience">
          Experience: {doctor.experience ?? "N/A"} years
        </div>
        <div data-testid="doctor-fee">
          Fee: ₹{doctor.fees ?? "N/A"}
        </div>
      </div>
    );
  }
  

export default DoctorCard;
