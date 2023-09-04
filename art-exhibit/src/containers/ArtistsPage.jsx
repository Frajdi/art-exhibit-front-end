import React, { useEffect, useState } from "react";
import AppBarMenu from "../comonents/landingPage/AppBar";
import Grid from "@mui/material/Grid";
import Footer from "../comonents/landingPage/Footer";
import TextAnimation from "../animationUtils/TextAnimation";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArtistsSearchGrid from "../comonents/artistsPage/ArtistsSearchGrid";
import useGetArtists from "../commands/getAllArtists";

const signitureStyles = {
  textDecoration: "none",
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "30px",
  opacity: 0.5,
};

const signitureNameStyles = {
  ...signitureStyles,
  opacity: 1,
};

const ArtistsPage = () => {
  const { data, error, isLoading, getArtists } = useGetArtists();
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    getArtists();
  }, []);

  useEffect(() => {
    setArtists(data);
  }, [data]);


  return (
    <Grid container sx={{ backgroundColor: "#FFFFFF" }}>
      <Grid item xs={12}>
        <AppBarMenu color="#FFFFFF" />
      </Grid>
      <Grid item xs={12} padding={"8rem 8rem 0 8rem"}>
        {artists === null ? (
          "LOADING ARTISTS ..."
        ) : (
          <ArtistsSearchGrid artistsData={artists} />
        )}
      </Grid>
      <Grid
        item
        xs={12}
        padding={"4rem 8rem 0 8rem"}
        sx={{ backgroundColor: "#FFFFFF" }}
      >
        <Footer />
      </Grid>
      <Grid
        item
        xs={12}
        padding={"3rem 8rem 4rem 8rem"}
        sx={{ backgroundColor: "#FFFFFF" }}
      >
        <Stack alignItems={"center"}>
          <TextAnimation color={"#c786ff"}>
            <Typography style={signitureStyles}>
              Created by{" "}
              <Typography component="span" style={signitureNameStyles}>
                Denisa
              </Typography>{" "}
              | All Right Reserved!
            </Typography>
          </TextAnimation>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ArtistsPage;
