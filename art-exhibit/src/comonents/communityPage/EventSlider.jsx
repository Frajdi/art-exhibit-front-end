import React from "react";
import SubtaskSlider from "../landingPage/eventSection/subtaskSlider/SubtaskSlider";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const buttonStyles = {
  position: "absolute",
  bottom: "10%",
  zIndex: 1,
  backgroundColor: '#3498db',
  color: '#ffffff',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

const EventSlider = () => {
  return (
    <Stack width={"100%"} direction="row">
      <IconButton style={{...buttonStyles, left: '9%'}}>
        <KeyboardDoubleArrowLeftIcon />
      </IconButton>
      <SubtaskSlider />
      <IconButton style={{...buttonStyles, right: '9%'}}>
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
    </Stack>
  );
};

export default EventSlider;
