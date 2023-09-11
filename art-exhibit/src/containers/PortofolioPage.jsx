import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import AppBarMenu from "../comonents/landingPage/AppBar";
import { useArtContext } from "../state/AppContext";
import useGetMyPortofolio from "../commands/getMyPortofolio";


const PortofolioPage = () => {
  const { authToken } = useArtContext();
  const {getMyPortofolio, data} = useGetMyPortofolio()

  useEffect(() => {
    getMyPortofolio(authToken)
  },[])

  useEffect(() => {
    console.log({data});
  },[data])
  

  return (
    <Grid container sx={{ backgroundColor: "#FFFFFF" }}>
      <Grid item xs={12}>
        <AppBarMenu color="#FFFFFF" />
      </Grid>
      <Grid item xs={12} overflow={'hidden'}>
      </Grid>
    </Grid>
  );
};

export default PortofolioPage;
