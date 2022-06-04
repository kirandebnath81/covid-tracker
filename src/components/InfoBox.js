import React from "react";

import "./style/InfoBox.css";

//mui
import Paper from "@mui/material/Paper";

const caseTypeStyle = {
  cases: {
    color: "rgb(12, 12, 255)",
  },
  recovered: {
    color: "rgb(8, 220, 8)",
  },
  deaths: {
    color: "red",
  },
};

const paperStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "20px",
};

const InfoBox = ({
  title,
  totalCases,
  todayCases,
  activeCases,
  caseType,
  onClick,
  isSmall,
  isBlue,
  isGreen,
  isRed,
}) => {
  console.log(isGreen);
  console.log(isRed);
  console.log(isBlue);

  return (
    <div
      className={`infoBox ${isSmall && "infoBox--small"} `}
      onClick={onClick}
    >
      <Paper
        elevation={10}
        sx={paperStyle}
        className={`infoBox__container ${isBlue && "infoBox--blue"} ${
          isGreen && "infoBox--green"
        } ${isRed && "infoBox--red"}`}
      >
        <h3 style={caseTypeStyle[caseType]}>{title}</h3>

        <h1 className="infoBox_todayCases" style={caseTypeStyle[caseType]}>
          {todayCases} <span className="infoBox__subtitle">(today)</span>
        </h1>

        {activeCases && (
          <h2 style={{ color: "rgb(12, 12, 255)", fontSize: "1.3rem" }}>
            {activeCases} <span className="infoBox__subtitle">(active)</span>
          </h2>
        )}

        <h3 style={caseTypeStyle[caseType]}>
          {totalCases} <span className="infoBox__subtitle">(total)</span>
        </h3>
      </Paper>
    </div>
  );
};

export default InfoBox;
