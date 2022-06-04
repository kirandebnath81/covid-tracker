import React from "react";

import { Circle, Popup } from "react-leaflet";

import { getSorted } from "./sortNum";

const caseTypeCircle = {
  cases: {
    multiplier: 250,
    color: "rgb(12, 12, 255)",
  },
  recovered: {
    multiplier: 250,
    color: "rgb(8, 220, 8)",
  },
  deaths: {
    multiplier: 2000,
    color: "red",
  },
};

const showMapCircle = (countries, caseType) => {
  return (
    <div>
      {countries &&
        countries.map((country) => (
          <Circle
            key={country.id}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            pathOptions={{
              color: caseTypeCircle[caseType].color,
              fillColor: caseTypeCircle[caseType].color,
            }}
            radius={
              Math.sqrt(country[caseType]) * caseTypeCircle[caseType].multiplier
            }
            fillOpacity={0.25}
          >
            <Popup>
              <div>
                <div
                  className="popup__flag"
                  style={{
                    backgroundImage: `url(${country.countryInfo.flag})`,
                  }}
                ></div>
                <h2 className="popup__country">{country.country}</h2>
                <div className="popup_stats">
                  <div>
                    Total : <span> {getSorted(country.cases)}</span>
                  </div>
                  <div>
                    Recovered : <span>{getSorted(country.recovered)}</span>
                  </div>
                  <div>
                    Deaths : <span>{getSorted(country.deaths)}</span>
                  </div>
                </div>
              </div>
            </Popup>
          </Circle>
        ))}
    </div>
  );
};

export default showMapCircle;
