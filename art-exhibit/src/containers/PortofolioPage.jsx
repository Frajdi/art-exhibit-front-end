import React from "react";
import Grid from "@mui/material/Grid";
import AppBarMenu from "../comonents/landingPage/AppBar";
import { useArtContext } from "../state/AppContext";
import { useParams } from "react-router-dom";
import Themes from "../comonents/portofolioCreatePage/Themes";



const PortofolioPage = () => {
  const { category } = useArtContext();
  const { action } = useParams();

  return (
    <Grid container sx={{ backgroundColor: "#FFFFFF" }}>
      {/* <Grid item xs={12}>
        <AppBarMenu color="#FFFFFF" />
      </Grid> */}
      <Grid item xs={12} overflow={'hidden'}>
        <Themes />
      </Grid>
    </Grid>
  );
};

export default PortofolioPage;
