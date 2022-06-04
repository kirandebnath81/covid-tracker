import React, { useContext, useEffect, useState } from "react";

import "./style/Main.css";

//mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";

import { getSorted } from "../utils/sortNum";

import Paginate from "../components/Paginate";

import { countryVaccination } from "../config/apiConfig";

import { CovidContext } from "../context/Context.js";

const headingData = [
  "Name",
  "Cases",
  "Active",
  "Recovered",
  "Critical",
  "Deaths",
  "Vaccine Doses",
];

const CovidTable = () => {
  const { countries, page, setPage } = useContext(CovidContext);
  const [totalPage, setTotalPage] = useState(23);
  const [vaccinated, setVaccinated] = useState([]);

  //Getting default table
  useEffect(() => {
    setPage(1);
  }, [setPage]);

  //getting the total pages
  useEffect(() => {
    setTotalPage(countries.length / 10);
  }, [countries]);

  //get vaccine data
  useEffect(() => {
    getIndiaData();
  }, []);

  const getIndiaData = async () => {
    try {
      const { data } = await axios.get(countryVaccination());
      setVaccinated(data);
    } catch (error) {
      console.log(error);
    }
  };

  function sortCountry(countries) {
    const sortVaccinated = vaccinated.map((data) => ({
      ...data,
      doses: Object.values(data.timeline)[0],
    }));

    const sortedVacinedCountries = countries.map((country) => ({
      ...country,
      vaccine: sortVaccinated?.filter(
        (data) => data.country === country.country
      )[0]?.doses,
    }));

    const sortedData = sortedVacinedCountries.sort((a, b) => b.cases - a.cases);
    const data = sortedData.slice(10 * page - 10, 10 * page);
    return data;
  }

  return (
    <div>
      <Paper elevation={10} sx={{ borderRadius: "20px" }}>
        <TableContainer sx={{ margin: "45px 0px 30px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headingData.map((data, index) => (
                  <TableCell key={index} className="covidTable__heading">
                    <h3>{data}</h3>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortCountry(countries).map((country) => (
                <TableRow key={country.id}>
                  <TableCell>
                    <img
                      src={country.countryInfo.flag}
                      alt=""
                      className="covidTable__img"
                    />
                    <h3 style={{ marginTop: "3px" }}>{country.country}</h3>
                  </TableCell>
                  <TableCell>
                    <div className="covidTable__cases">
                      {getSorted(country.cases)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="covidTable__cases">
                      {getSorted(country.active)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="covidTable__cases">
                      {getSorted(country.recovered)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="covidTable__cases">
                      {getSorted(country.critical)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="covidTable__cases">
                      {getSorted(country.deaths)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="covidTable__cases">
                      {getSorted(country.vaccine)}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Paginate totalPage={totalPage} />
    </div>
  );
};

export default CovidTable;
