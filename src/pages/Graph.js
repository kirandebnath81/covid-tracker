import React, { useContext, useEffect, useState } from "react";

import "./style/Main.css";

import numeral from "numeral";

//mui
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

//chart
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import axios from "axios";

//api
import {
  singleCountry,
  global,
  globalHistory,
  countryHistory,
} from "../config/apiConfig";

//components
import SelectCountries from "../components/SelectCountries";
import InfoBoxContainer from "../components/InfoBoxContainer";

//context
import { CovidContext } from "../context/Context";

const options = {
  responsive: true,
  interaction: {
    intersect: false,
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        callback: function (val, index) {
          return numeral(val).format("0a");
        },
      },
    },
  },
};

const Graph = () => {
  const { caseType, selectedCountry } = useContext(CovidContext);

  const [countryInfo, setCountryInfo] = useState([]);
  const [historyData, setHistoryData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
      }
    } catch (error) {
      console.log(error);
    }
  };

  Chart.register(...registerables);
  //get historical data
  useEffect(() => {
    getHistoricalData(selectedCountry);
  }, [selectedCountry]);

  const getHistoricalData = async (country) => {
    try {
      if (country === "global") {
        const { data } = await axios.get(globalHistory());
        setHistoryData(data);
        setIsLoading(false);
        return;
      }

      const { data } = await axios.get(countryHistory(country));
      setHistoryData(data.timeline);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setHistoryData(null);
    }
  };

  const getLastDate = (date) => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() - 1);

    return currentDate.toLocaleDateString("en-us", {
      month: "numeric",
      day: "numeric",
      year: "2-digit",
    });
  };

  const getConverted = () => {
    if (!historyData) return;
    const data = historyData[caseType];
    const sortedData = [];
    for (const key in data) {
      sortedData.push({
        date: key,
        cases:
          Math.abs(data[key] - data[getLastDate(key)] || 0) === 0
            ? Math.sqrt(data[key]).toFixed()
            : Math.abs(data[key] - data[getLastDate(key)] || 0),
      });
    }

    return sortedData;
  };

  const data = {
    labels: getConverted()?.map((data) => data.date),
    datasets: [
      {
        fill: true,
        backgroundColor:
          caseType === "cases" ? "rgba(0, 8, 255,0.6)" : "rgba(255, 9, 9,0.6)",
        borderColor: caseType === "cases" ? "blue" : "red",
        borderWidth: 1,
        radius: 0,
        label: `Daily ${caseType} `,
        data: getConverted()?.map((data) => data.cases),
      },
    ],
  };

  return (
    <main>
      <div className="container">
        <div className="container__left">
          <SelectCountries />
          <InfoBoxContainer countryInfo={countryInfo} />
        </div>

        <div className="container__right">
          {isLoading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                margin: "110px 30px 30px 0px",
              }}
            >
              <CircularProgress
                sx={{ color: "blue" }}
                size={300}
                variant="indeterminate"
                thickness={1}
              />
            </Box>
          ) : historyData && caseType !== "recovered" ? (
            <div className="chart-container">
              <Line data={data} options={options} />
            </div>
          ) : (
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>
              History Data is not found
            </h1>
          )}
        </div>
      </div>
    </main>
  );
};

export default Graph;
