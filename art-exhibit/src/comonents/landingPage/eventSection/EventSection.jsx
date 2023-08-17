import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SubtaskSlider from "./subtaskSlider/SubtaskSlider";
import TextAnimation from "../../../animationUtils/TextAnimation";

const titleStyles = {
  textDecoration: "none",
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "60px",
  lineHeight: "76.8px",
  width: "15ch",
};

const EventSection = () => {
  return (
    <Stack alignItems={"center"}>
      <TextAnimation color={"#c786ff"}>
        <Typography style={titleStyles} align="center">
          Latest event from
        </Typography>
      </TextAnimation>
      <TextAnimation color={"#c786ff"}>
        <Typography style={titleStyles} align="center">
          artists globally
        </Typography>
      </TextAnimation>
      <SubtaskSlider />
    </Stack>
  );
};

export default EventSection;
