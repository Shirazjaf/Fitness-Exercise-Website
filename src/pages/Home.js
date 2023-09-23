import React from "react";
import { Box } from "@mui/material";

import HeroBanner from "./../components/HeroBanner";
import SearchExcercises from "./../components/SearchExcercises";
import Excercises from "./../components/Excercises";

const Home = () => {
  return (
    <div>
      <Box>
        <HeroBanner />
        <SearchExcercises />
        <Excercises />
      </Box>
    </div>
  );
};

export default Home;
