import numeral from "numeral";

export const getSorted = (num) => {
  const sortNum = numeral(num).format("0.0a");
  return `+${sortNum}`;
};
