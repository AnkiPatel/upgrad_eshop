import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import FeaturesProducts from "../../Components/LandingPage/FeaturesProducts/FeaturesProducts";

const useStyle = makeStyles((theme) => {
  return {
    container: {},
    LandingSection: {
      display: "flex",
      flexDirection: "column",
      gap: "60px",
    },
  };
});

const LandingPage = () => {
  const { container, LandingSection } = useStyle();

  return (
    <Box className={container}>
      <Box className={LandingSection}>
        <Box>
          <FeaturesProducts />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
