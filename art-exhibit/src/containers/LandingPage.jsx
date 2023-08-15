import React from "react";
import ResponsiveAppBar from "../comonents/landingPage/AppBar";
import { Grid } from "@mui/material";

const LandingPage = () => {
  return (
    <Grid container sx={{ backgroundColor: "#F5E9FF" }}>
      <Grid item xs={12}>
        <ResponsiveAppBar />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
