import React, { useContext } from "react";
//mui
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { CovidContext } from "../context/Context";

const SelectCountries = () => {
  const { countries, selectedCountry, setSelectedCountry } =
    useContext(CovidContext);

  return (
    <div>
      <FormControl variant="standard" className="home__dropdown">
        <Select
          onChange={(e) => setSelectedCountry(e.target.value)}
          value={selectedCountry}
          sx={{ borderRadius: "10px" }}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        >
          <MenuItem value="global">Global</MenuItem>
          {countries.length > 0 &&
            countries.map(({ country, countryInfo, id }) => (
              <MenuItem key={id} value={countryInfo.iso2}>
                {country}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCountries;
