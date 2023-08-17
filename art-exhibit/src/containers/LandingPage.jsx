import React from "react";
import AppBarMenu from "../comonents/landingPage/AppBar";
import HeaderSection from "../comonents/landingPage/headerSection/HeaderSection";
import Grid  from "@mui/material/Grid";
import PersonalizeSections from "../comonents/landingPage/PersonalizeSections";
import EngaginStoriesSection from "../comonents/landingPage/EngaginStoriesSection";
import WeProvideSection from "../comonents/landingPage/weProvideSection/WeProvideSection";

const LandingPage = () => {
  return (
    <Grid container sx={{ backgroundColor: "#F5E9FF" }}>
      <Grid item xs={12}>
        <AppBarMenu />
      </Grid>
      <Grid item xs={12}>
        <HeaderSection />
      </Grid>
      <Grid item xs={12} padding={'6rem 8rem'} sx={{backgroundColor : '#C786FF'}}>
        <PersonalizeSections />
      </Grid>
      <Grid item xs={12} padding={'6rem 8rem'} sx={{backgroundColor : '#FFFFFF'}}>
        <EngaginStoriesSection />
      </Grid>
      <Grid item xs={12} padding={'6rem 8rem'} sx={{backgroundColor : '#FFFFFF'}}>
        <WeProvideSection />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
