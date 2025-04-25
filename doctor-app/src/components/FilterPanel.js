import React from "react";

const specialtiesList = [
  "Dentist", "Gynaecologist", "Dermatologist", "Cardiologist", "Physiotherapist"
];

function FilterPanel({ specialties, setSpecialties, mode, setMode }) {
  const toggleSpecialty = (spec) => {
    setSpecialties((prev) =>
      prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec]
    );
  };

  return (
    <div>
      <h3 data-testid="filter-header-moc">Consultation Mode</h3>
      <label>
        <input
          data-testid="filter-video-consult"
          type="radio"
          name="mode"
          checked={mode === "video"}
          onChange={() => setMode("video")}
        />
        Video Consult
      </label>
      <label>
        <input
          data-testid="filter-in-clinic"
          type="radio"
          name="mode"
          checked={mode === "clinic"}
          onChange={() => setMode("clinic")}
        />
        In Clinic
      </label>

      <h3 data-testid="filter-header-speciality">Speciality</h3>
      {specialtiesList.map((spec) => (
        <label key={spec}>
          <input
            type="checkbox"
            checked={specialties.includes(spec)}
            onChange={() => toggleSpecialty(spec)}
            data-testid={`filter-specialty-${spec.replace(/\s|\//g, "-")}`}
          />
          {spec}
        </label>
      ))}
    </div>
  );
}

export default FilterPanel;
