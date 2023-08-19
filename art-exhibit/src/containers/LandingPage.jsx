import React, { useEffect, useRef } from "react";
import AppBarMenu from "../comonents/landingPage/AppBar";
import HeaderSection from "../comonents/landingPage/headerSection/HeaderSection";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PersonalizeSections from "../comonents/landingPage/PersonalizeSections";
import EngaginStoriesSection from "../comonents/landingPage/EngaginStoriesSection";
import WeProvideSection from "../comonents/landingPage/weProvideSection/WeProvideSection";
import EventSection from "../comonents/landingPage/eventSection/EventSection";
import StartTodaySection from "../comonents/landingPage/StartTodaySection";
import Footer from "../comonents/landingPage/Footer";
import TextAnimation from "../animationUtils/TextAnimation";
import { Stack } from "@mui/material";

const LandingPage = () => {
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

  return (
    <Grid container sx={{ backgroundColor: "#F5E9FF" }}>
      <Grid item xs={12}>
        <AppBarMenu />
      </Grid>
      <Grid item xs={12} paddingTop={5}>
        <HeaderSection />
      </Grid>
      <Grid
        item
        xs={12}
        padding={"6rem 8rem"}
        sx={{ backgroundColor: "#C786FF" }}
      >
        <PersonalizeSections />
      </Grid>
      <Grid
        item
        xs={12}
        padding={"6rem 8rem"}
        sx={{ backgroundColor: "#f5e9ff" }}
      >
        <EngaginStoriesSection />
      </Grid>
      <Grid
        item
        xs={12}
        padding={"4rem 8rem"}
        sx={{ backgroundColor: "#f5e9ff" }}
      >
        <WeProvideSection />
      </Grid>
      <Grid
        item
        xs={12}
        padding={"6rem 8rem 0 8rem"}
        sx={{ backgroundColor: "#f5e9ff" }}
      >
        <EventSection />
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "#f5e9ff" }}>
        <StartTodaySection />
      </Grid>
      <Grid
        item
        xs={12}
        padding={"4rem 8rem 0 8rem"}
        sx={{ backgroundColor: "#f5e9ff" }}
      >
        <Footer />
      </Grid>
      <Grid
        item
        xs={12}
        padding={"3rem 8rem 4rem 8rem"}
        sx={{ backgroundColor: "#f5e9ff" }}
      >
      <Stack alignItems={'center'}>
      <TextAnimation color={'#c786ff'}>
        <Typography style={signitureStyles}>
          Created by{" "}
          <Typography
            component="span"
            style={signitureNameStyles}
          >
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

export default LandingPage;
