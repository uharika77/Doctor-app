import React from "react";
import { useSearchParams } from "react-router-dom";

const allSpecialties = [
  "General Physician", "Dentist", "Dermatologist", "Paediatrician",
  "Gynaecologist", "ENT", "Diabetologist", "Cardiologist", "Physiotherapist",
  "Endocrinologist", "Orthopaedic", "Ophthalmologist", "Gastroenterologist",
  "Pulmonologist", "Psychiatrist", "Urologist", "Dietitian/Nutritionist",
  "Psychologist", "Sexologist", "Nephrologist", "Neurologist", "Oncologist",
  "Ayurveda", "Homeopath"
];

function FilterPanel({ setSearchParams }) {
  const [searchParams] = useSearchParams();

  const handleModeChange = (e) => {
    setSearchParams((prev) => {
      prev.set("mode", e.target.value);
      return prev;
    });
  };

  const handleSpecialtyChange = (e) => {
    setSearchParams((prev) => {
      const selected = new Set(prev.getAll("specialties"));
      if (e.target.checked) selected.add(e.target.value);
      else selected.delete(e.target.value);

      prev.delete("specialties");
      selected.forEach((val) => prev.append("specialties", val));
      return prev;
    });
  };

  const handleSortChange = (e) => {
    setSearchParams((prev) => {
      prev.set("sort", e.target.value);
      return prev;
    });
  };

  return (
    <div className="filter-panel">
      <div data-testid="filter-header-moc"><strong>Consultation Mode</strong></div>
      <div>
        <input data-testid="filter-video-consult" type="radio" name="mode" value="Video Consult" onChange={handleModeChange} /> Video Consult
      </div>
      <div>
        <input data-testid="filter-in-clinic" type="radio" name="mode" value="In Clinic" onChange={handleModeChange} /> In Clinic
      </div>

      <div data-testid="filter-header-speciality"><strong>Speciality</strong></div>
      {allSpecialties.map((spec) => (
        <div key={spec}>
          <input
            data-testid={`filter-specialty-${spec.replace(/[/\s]/g, "-")}`}
            type="checkbox"
            value={spec}
            onChange={handleSpecialtyChange}
          />{" "}
          {spec}
        </div>
      ))}

      <div data-testid="filter-header-sort"><strong>Sort</strong></div>
      <div>
        <input data-testid="sort-fees" type="radio" name="sort" value="fees" onChange={handleSortChange} /> Fees
      </div>
      <div>
        <input data-testid="sort-experience" type="radio" name="sort" value="experience" onChange={handleSortChange} /> Experience
      </div>
    </div>
  );
}

export default FilterPanel;
