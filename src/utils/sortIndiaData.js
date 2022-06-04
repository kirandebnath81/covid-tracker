import { v4 } from "uuid";

export const sortIndiaData = (rowData, statesNames) => {
  if (!rowData) return;

  const data = [];

  for (const key in rowData) {
    const details = rowData[key];
    let name = [];

    if (key === "TT") {
      name = [{ name: "Total" }];
    } else if (key === "DN") {
      name = [{ name: "Dadra and Nagar Haveli and Daman and Diu" }];
    } else {
      name = statesNames?.filter((e) => e.iso2 === key);
    }

    data.push({
      name: name ? name[0]?.name : key,
      value: key,
      confirmed: details.total.confirmed,
      recovered: details.total.recovered,
      deaths: details.total.deceased,
      tested: details.total.tested,
      vaccine1:
        details.meta?.population &&
        ((details.total.vaccinated1 / details.meta.population) * 100).toFixed(
          1
        ),
      fullyVaccinated:
        details.meta?.population &&
        ((details.total.vaccinated2 / details.meta.population) * 100).toFixed(
          1
        ),
      id: v4(),
    });
  }

  data.sort((a, b) => b.confirmed - a.confirmed);

  return data;
};
