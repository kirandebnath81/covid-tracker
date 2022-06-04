import React from "react";

import "./style/CovidInfo.css";

import Paper from "@mui/material/Paper";

import { symptomsData, preventionData } from "../CovidInfoData";

const CovidInfo = () => {
  return (
    <div className="covidInfo">
      <div className="covidInfo__container">
        <div className="covidInfo__headingText">
          <h1>Coronavirus Symptoms</h1>
          <p>
            People with COVID-19 positive have a wide range of symptoms, ranging
            from mild symptoms to severe illness. They may appear 2-14 days
            after exposure to the virus. People exposed to COVID-19 may have
            these symptoms.
          </p>
        </div>
        <div className="covidInfo__items">
          {symptomsData.map((data) => (
            <Paper
              key={data.id}
              elevation={10}
              className="covidInfo__item covidInfo__symptom"
            >
              <h2>{data.title}</h2>
              <img src={data.imgUrl} alt="" />
              <p>{data.desc}</p>
            </Paper>
          ))}
        </div>
      </div>
      <div className="covidInfo__container">
        <div className="covidInfo__headingText">
          <h1>PREVENTION & ADVICE</h1>
          <p>
            The best way to prevent illness is to avoid being exposed to this
            coronavirus. Stay vigilant & be aware of the latest information on
            the (sars-cov-2) COVID-19 outbreak.
          </p>
        </div>
        <div className="covidInfo__items">
          {preventionData.map((data) => (
            <Paper
              key={data.id}
              elevation={5}
              className="covidInfo__item covidInfo__prevention"
            >
              <h3>{data.title}</h3>
              <img src={data.imgUrl} alt="" />
              <p>{data.desc}</p>
            </Paper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CovidInfo;
