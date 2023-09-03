import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stepper, Step, Avatar, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FileUploader from "./FileUploader";
import LocationPicker from "./LocationSelector";

const steps = [
  {
    label: "Event Image",
    content: FileUploader,
  },
  {
    label: "Create an ad group",
    content: LocationPicker,
  },
  {
    label: "Create an ad",
    content: FileUploader,
  },
  {
    label: "Create an ad",
    content: FileUploader,
  },
];

const glassmorphismStyles = {
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Darker glass effect
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  color: "#FFFFFF", // White text color
  padding: "20px",
  position: "relative",
  width: "70vw", // Adjust the width as needed
  height: "90vh", // Adjust the height as needed
  margin: "auto", // Center the content horizontally and vertically
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const stepNumberStyles = {
  backgroundColor: "#3f51b5", // Background color for the step number circle
  color: "#FFFFFF", // Text color for the step number
  width: "22px", // Adjust the width as needed
  height: "22px", // Adjust the height as needed
  fontSize: "1rem",
  fontWeight: "bold",
  fontSize: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
};

const ActiveContent = ({ activeStep, eventData, setEventData }) => {
  const CurrentComponent = steps[activeStep].content;
  return <CurrentComponent eventData={eventData} setEventData={setEventData}/>;
};

const CreateEventPopUp = ({ open, handleClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [eventData, setEventData] = useState({
    address: "string",
    category: "string",
    description: "string",
    id: 0,
    name: "string",
    photo: "",
    time: "2023-09-03T11:22:43.711Z",
  });
  const theme = useTheme();
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      PaperProps={{ style: glassmorphismStyles }}
    >
      <Typography
        variant="h4"
        style={{ textAlign: "center", marginBottom: "20px", color: "#FFFFFF" }}
      >
        {steps[activeStep].label}
      </Typography>
      <ActiveContent activeStep={activeStep} eventData={eventData} setEventData={setEventData} />
      <Stack>
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step key={index}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={"10px"}
              >
                <Avatar
                  sx={{
                    ...stepNumberStyles,
                    background: activeStep <= index - 1 && "#2E3033",
                  }}
                >
                  {index + 1}
                </Avatar>
                <Typography>{step.label}</Typography>
              </Stack>
            </Step>
          ))}
        </Stepper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleBack}
            disabled={activeStep === 0}
            style={{ borderRadius: "5px" }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            style={{ borderRadius: "5px" }}
          >
            Next
          </Button>
        </div>
      </Stack>
    </Dialog>
  );
};

export default CreateEventPopUp;
