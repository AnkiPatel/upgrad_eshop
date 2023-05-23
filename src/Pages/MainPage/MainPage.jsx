import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";

const MainPage = ({ ActivePage }) => {
  return (
    <Box>
     
      <Box>{ActivePage}</Box>
    </Box>
  );
};

export default MainPage;
