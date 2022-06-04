import { useEffect, useState, createContext } from "react";

import axios from "axios";
import { v4 } from "uuid";

import { allCountries, indiaData } from "../config/apiConfig";

//create context
export const CovidContext = createContext();

//create Provider
export const CovidProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState("global");
  const [caseType, setCaseType] = useState("cases");
  const [indiaCovidData, setIndiaCovidData] = useState(null);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    try {
      const { data } = await axios.get(allCountries());
      const countries = data.map((country) => ({ ...country, id: v4() }));
      setCountries(countries);
    } catch (error) {
      console.log(error);
    }
  };

  //get india data
  useEffect(() => {
    getIndiaData();
  }, []);

  const getIndiaData = async () => {
    try {
      const { data } = await axios.get(indiaData());
      setIndiaCovidData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CovidContext.Provider
      value={{
        countries,
        page,
        setPage,
        selectedCountry,
        setSelectedCountry,
        caseType,
        setCaseType,
        indiaCovidData,
        setIndiaCovidData,
      }}
    >
      {children}
    </CovidContext.Provider>
  );
};
