import React, { useContext } from "react";

import "../style/Main.css";

// import CovidTable from "./CovidTable";
import CovidIndiaTable from "../../components/CovidIndiaTable";

import { CovidContext } from "../../context/Context";

import { useParams } from "react-router-dom";

const IndiaDistricts = () => {
  const { name } = useParams();
  const { indiaCovidData } = useContext(CovidContext);

  // console.log(indiaCovidData[name].districts);
  return (
    <div>
      <CovidIndiaTable
        covidData={indiaCovidData && indiaCovidData[name]?.districts}
      />
    </div>
  );
};

export default IndiaDistricts;
