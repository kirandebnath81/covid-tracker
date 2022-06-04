import React, { useState } from "react";

import "./style/Main.css";

//mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

//helper functions
import { sortIndiaData } from "../utils/sortIndiaData";
import { getSorted } from "../utils/sortNum";

//router
import { useNavigate } from "react-router-dom";

const headingData = [
  "Name",
  "Cases",
  "Recovered",
  "Deaths",
  "Tested",
  "1st Dose",
  "Both Dose",
];

const CovidIndiaTable = ({ covidData, statesNames }) => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  const dataList = sortIndiaData(covidData, statesNames);

  const filteredData = dataList?.filter((data) =>
    data.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const clickHandler = (value) => {
    if (value.length > 2) return;
    if (value === "TT") return;

    navigate(`/covid-19/india/districts/${value}`);
  };

  return (
    <div>
      <div className="covidTable__searchContainer">
        <TextField
          id="outlined-basic"
          label="Search with name..."
          variant="outlined"
          className="covidTable__search"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
      </div>

      <Paper elevation={10} sx={{ borderRadius: "15px" }}>
        <TableContainer className="covidTable">
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
              {filteredData?.map((data) => (
                <TableRow
                  key={data.id}
                  hover
                  sx={{ cursor: "pointer" }}
                  onClick={() => clickHandler(data.value)}
                >
                  <TableCell>
                    <h4>{data?.name}</h4>
                  </TableCell>
                  <TableCell>
                    <div className="covidTable__cases">
                      {data.confirmed
                        ? getSorted(data?.confirmed)
                        : "not found"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="covidTable__cases">
                      {data.recovered
                        ? getSorted(data?.recovered)
                        : "not found"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="covidTable__cases">
                      {data.deaths ? getSorted(data?.deaths) : "not found"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="covidTable__cases">
                      {data.tested ? getSorted(data?.tested) : "not found"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="covidTable__cases">{data.vaccine1} %</div>
                  </TableCell>
                  <TableCell>
                    <div className="covidTable__cases">
                      <div className="covidTable__cases">
                        {data.fullyVaccinated} %
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default CovidIndiaTable;
