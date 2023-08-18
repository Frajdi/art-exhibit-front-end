import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextAnimation from "../../animationUtils/TextAnimation";

const titleStyles = {
  textDecoration: "none",
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "60px",
  lineHeight: "76.8px",
};

const subTitleStyles = {
  ...titleStyles,
  fontSize: "20px",
  lineHeight: "30px",
};

const buttonStyles = {
  backgroundColor: "#C786FF",
  color: "black",
  width: "196px",
  height: "51px",
  borderRadius: "10px",
  margin: "2rem",
  textTransform: "none",
};

const buttonTextStyles = {
    ...titleStyles,
    fontSize: '20px',
    lineHeight: '30px'
}

const StartTodaySection = () => {
  return (
    <Stack alignItems={"center"}>
      <TextAnimation color={"#c786ff"}>
        <Typography style={titleStyles} align="center">
          Start today with ArtExhibit
        </Typography>
      </TextAnimation>
      <TextAnimation color={"#c786ff"}>
        <Typography style={subTitleStyles} align="center">
          Speak to our team and see how we can help you.
        </Typography>
      </TextAnimation>
      <Button variant="contained" style={buttonStyles}>
      <TextAnimation color={'#f5e9ff'}>
        <Typography style={buttonTextStyles}>Contact now</Typography>
        </TextAnimation>
      </Button>
    </Stack>
  );
};

export default StartTodaySection;
