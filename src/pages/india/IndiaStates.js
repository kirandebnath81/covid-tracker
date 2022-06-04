import React, { useContext, useEffect, useState } from "react";

import "../style/Main.css";

// import CovidTable from "./CovidTable";
import CovidIndiaTable from "../../components/CovidIndiaTable";

import { CovidContext } from "../../context/Context";

//api
import axios from "axios";
import { statesDetails } from "../../config/apiConfig";

const IndiaStates = () => {
  const { indiaCovidData } = useContext(CovidContext);

  const [states, setStates] = useState();

  useEffect(() => {
    getStates();
  }, []);

  const getStates = async () => {
    try {
      const { data } = await axios.get(statesDetails(), {
        headers: {
          "X-CSCAPI-KEY": process.env.REACT_APP_API_KEY,
        },
      });
      setStates(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <CovidIndiaTable covidData={indiaCovidData} statesNames={states} />
    </div>
  );
};

export default IndiaStates;
