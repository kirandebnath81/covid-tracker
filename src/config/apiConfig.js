export const allCountries = () => {
  return `https://disease.sh/v3/covid-19/countries`;
};

export const singleCountry = (country) => {
  return `https://disease.sh/v3/covid-19/countries/${country}?strict=true`;
};

export const global = () => {
  return `https://disease.sh/v3/covid-19/all`;
};

export const globalHistory = () => {
  return `https://disease.sh/v3/covid-19/historical/all?lastdays=all`;
};

export const countryHistory = (country) => {
  return `https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`;
};

export const globalVaccination = () => {
  return `https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=1&fullData=false`;
};

export const countryVaccination = () => {
  return `https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1&fullData=false`;
};

export const indiaData = () => {
  return `https://data.covid19bharat.org/v4/min/data.min.json`;
};

export const statesDetails = () => {
  return `https://api.countrystatecity.in/v1/countries/IN/states`;
};
