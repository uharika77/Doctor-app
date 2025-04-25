
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
