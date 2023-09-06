import React, { useEffect, useState } from "react";
import AppBarMenu from "../comonents/landingPage/AppBar";
import Grid from "@mui/material/Grid";
import Footer from "../comonents/landingPage/Footer";
import TextAnimation from "../animationUtils/TextAnimation";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArtistsSearchGrid from "../comonents/artistsPage/ArtistsSearchGrid";
import useGetArtists from "../commands/getAllArtists";
import { IconButton, Paper } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getArtists(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (data) {
      setArtists(data);
    }
  }, [data]);

  return (
    <Grid container sx={{ backgroundColor: "#FFFFFF" }}>
      <Grid item xs={12}>
        <AppBarMenu color="#FFFFFF" />
      </Grid>
      <Grid item xs={12} padding={"8rem 8rem 0 8rem"}>
        {artists !== null && <ArtistsSearchGrid artistsData={artists} />}
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "2rem 0 0 2.5rem",
        }}
      >
        <Paper
          elevation={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px", // Add padding for the glass effect
            background: "rgba(255, 255, 255, 0.1)", // Glassmorphism effect
            backdropFilter: "blur(5px)", // Glassmorphism effect
            borderRadius: "10px", // Rounded corners
          }}
        >
          <IconButton
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage + 1 === 1}
            size="large"
            style={{
              backgroundColor: currentPage + 1 === 1 ? "#e7deef" : "#007BFF",
              color: "white",
              marginRight: "10px", // Adjust the spacing
              borderRadius: "8px", // Add rounded corners
            }}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{
              margin: "0 20px", // Adjust the spacing
              color: "#007BFF", // Text color
              fontWeight: "bold", // Make it bold
            }}
          >
            {currentPage + 1}
          </Typography>
          <IconButton
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={artists?.length < 9}
            size="large"
            style={{
              backgroundColor: artists?.length < 6 ? "#e7deef" : "#007BFF",
              color: "white",
              marginLeft: "10px", // Adjust the spacing
              borderRadius: "8px", // Add rounded corners
            }}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Paper>
      </div>
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
