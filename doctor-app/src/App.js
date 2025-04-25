import React, { useEffect, useState } from "react";
import DoctorListPage from "./pages/DoctorListPage";

function App() {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    fetch("https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json")
      .then((res) => res.json())
      .then((data) => setDoctorData(data))
      .catch((err) => console.error("Failed to fetch doctor data", err));
  }, []);

  return <DoctorListPage doctorData={doctorData} />;
}

export default App;
