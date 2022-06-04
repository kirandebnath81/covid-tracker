import React, { useContext } from "react";

import { getSorted } from "../utils/sortNum";
import InfoBox from "./InfoBox";

import { CovidContext } from "../context/Context";

const InfoBoxContainer = ({ countryInfo }) => {
  const { caseType, setCaseType } = useContext(CovidContext);

  return (
    <div style={{ marginTop: "12px" }}>
      <InfoBox
        title="Coronavirus Cases"
        totalCases={getSorted(countryInfo.cases)}
        todayCases={getSorted(countryInfo.todayCases)}
        activeCases={getSorted(countryInfo.active)}
        caseType="cases"
        onClick={() => setCaseType("cases")}
        isBlue={caseType === "cases"}
      />
      <InfoBox
        title="Recovered "
        totalCases={getSorted(countryInfo.recovered)}
        todayCases={getSorted(countryInfo.todayRecovered)}
        caseType="recovered"
        onClick={() => setCaseType("recovered")}
        isSmall
        isGreen={caseType === "recovered"}
      />
      <InfoBox
        title="Deaths"
        totalCases={getSorted(countryInfo.deaths)}
        todayCases={getSorted(countryInfo.todayDeaths)}
        caseType="deaths"
        onClick={() => setCaseType("deaths")}
        isSmall
        isRed={caseType === "deaths"}
      />
    </div>
  );
};

export default InfoBoxContainer;
