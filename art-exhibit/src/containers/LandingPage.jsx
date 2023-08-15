import React from "react";
import AppBarMenu from "../comonents/landingPage/AppBar";
import Grid  from "@mui/material/Grid";

const LandingPage = () => {
  return (
    <Grid container sx={{ backgroundColor: "#F5E9FF" }}>
      <Grid item xs={12}>
        <AppBarMenu />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
