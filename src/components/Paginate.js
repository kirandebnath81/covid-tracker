import React, { useContext } from "react";

import { CovidContext } from "../context/Context";

import Pagination from "@mui/material/Pagination";

const Paginate = ({ totalPage }) => {
  const { page, setPage } = useContext(CovidContext);

  const handleChange = (event, value) => {
    setPage(value);
    window.scroll(0, 0);
  };

  return (
    <div>
      <Pagination
        count={totalPage}
        page={page}
        onChange={handleChange}
        sx={{
          margin: "50px 0px",
          display: "flex",
          justifyContent: "center",
        }}
      />
    </div>
  );
};

export default Paginate;
