import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AppBarMenu from "../comonents/landingPage/AppBar";
import Footer from "../comonents/landingPage/Footer";
import TextAnimation from "../animationUtils/TextAnimation";
import TitleGroup from "../comonents/communityPage/TitleGroup";

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

const CommunityPage = () => {
  return (
    <Grid container sx={{ backgroundColor: "#FFFFFF" }}>
      <Grid item xs={12}>
        <AppBarMenu color="#FFFFFF" />
      </Grid>
      <Grid
        item
        xs={12}
        padding={"8rem 8rem 0 8rem"}
        sx={{ backgroundColor: "#FFFFFF" }}
      >
        <TitleGroup
          title={"Community"}
          seeAllText={"events"}
          seeAllFunction={console.log("see all")}
          createNewText={"event"}
          createNewFunction={console.log("event")}
        />
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

export default CommunityPage;
