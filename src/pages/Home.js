import React, { useContext, useEffect, useState } from "react";

import "./style/Main.css";
import "leaflet/dist/leaflet.css";

//axios
import axios from "axios";

//api
import { singleCountry, global, globalVaccination } from "../config/apiConfig";

//components
import Map from "../components/home/Map";
import CovidInfo from "../components/home/CovidInfo";
import SelectCountries from "../components/SelectCountries";
import InfoBoxContainer from "../components/InfoBoxContainer";

//context
import { CovidContext } from "../context/Context";

const Home = () => {
  const { countries, selectedCountry, caseType } = useContext(CovidContext);
  const [countryInfo, setCountryInfo] = useState({});
  const [mapCenter, setMapCenter] = useState([24.0, -40.786]);
  const [mapZoom, setMapZoom] = useState(3);
  const [vaccinated, setVaccinated] = useState(null);

  //get single country data
  useEffect(() => {
    getCountryData(selectedCountry);
  }, [selectedCountry]);

  const getCountryData = async (country) => {
    try {
      if (country === "global") {
        const { data } = await axios.get(global());
        setCountryInfo(data);
      } else {
        const { data } = await axios.get(singleCountry(country));
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4.3);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  world wide vaccine data
  useEffect(() => {
    getVaccineData();
  }, []);

  const getVaccineData = async () => {
    try {
      const { data } = await axios.get(globalVaccination());
      const sortData = { date: Object.keys(data), doses: Object.values(data) };
      setVaccinated(sortData);
    } catch (error) {
      console.log(error);
    }
  };

  const updatedDate = new Date(vaccinated?.date[0]).toDateString();

  return (
    <main>
      <div className="container">
        <div className="container__left">
          <SelectCountries />
          <InfoBoxContainer countryInfo={countryInfo} />
        </div>

        <div className="container__right">
          <Map
            center={mapCenter}
            zoom={mapZoom}
            countries={countries}
            caseType={caseType}
          />
        </div>
      </div>
      <div className="home__vaccine">
        As of , <span className="home__vaccineMark">{updatedDate}</span> a total
        of{" "}
        <span className="home__vaccineDose">
          {vaccinated?.doses[0]?.toLocaleString()}
        </span>{" "}
        vaccine doses have been administered{" "}
        <span className="home__vaccineMark">Globally</span> .
      </div>
      <CovidInfo />
    </main>
  );
};

export default Home;
