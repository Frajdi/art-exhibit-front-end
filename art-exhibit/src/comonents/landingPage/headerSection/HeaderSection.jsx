import React from "react";
import ImageGroup from "./ImageGroup";
import TextAnimation from "../../../animationUtils/TextAnimation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const titleStyles = {
  textDecoration: "none",
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "50px",
  lineHeight: "75px",
};

const subtitleStyles = {
  ...titleStyles,
  fontSize: "25px",
  lineHeight: "37.5px",
};

const buttonStyles = {
  backgroundColor: "#C786FF",
  color: "black",
  borderRadius: "50px",
  padding: "10px 20px",
  textTransform: "none",
  width: "40%",
};

const buttonTextStyles = {
  ...titleStyles,
  fontSize: "20px",
  lineHeight: "30px",
};

const HeaderSection = () => {
  return (
    <Grid container padding={"4rem 8rem"}>
      <Grid item xs={6}>
        <Stack spacing={5} direction={"column"} width={"85%"}>
          <Stack>
            <TextAnimation color={"#C786FF"}>
              <Typography style={titleStyles}>Where creativity</Typography>
            </TextAnimation>
            <TextAnimation color={"#C786FF"}>
              <Typography style={titleStyles}>meets innovation,</Typography>
            </TextAnimation>
            <TextAnimation color={"#C786FF"}>
              <Typography style={titleStyles}>and every portofolio</Typography>
            </TextAnimation>
            <TextAnimation color={"#C786FF"}>
              <Typography style={titleStyles}>tells a story</Typography>
            </TextAnimation>
          </Stack>
          <TextAnimation color="#C786FF">
            <Typography style={subtitleStyles}>
              Manage and grow your art business
            </Typography>
          </TextAnimation>
          <Button style={buttonStyles}>
            <TextAnimation color={"#FFFFFF"}>
              <Typography style={buttonTextStyles}>Get Started</Typography>
            </TextAnimation>
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <ImageGroup />
      </Grid>
    </Grid>
  );
};

export default HeaderSection;
