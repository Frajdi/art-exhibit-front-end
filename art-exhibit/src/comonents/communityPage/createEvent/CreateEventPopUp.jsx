import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FileUploader from "./FileUploader";
import LocationPicker from "./LocationSelector";
import DateTimePicker from "./DateTimePicker";
import Description from "./Description";
import { useArtContext } from "../../../state/AppContext";
import useCreateEvent from "../../../commands/createEvent";

const steps = [
  {
    label: "Event Image",
    content: FileUploader,
  },
  {
    label: "Pick Location",
    content: LocationPicker,
  },
  {
    label: "Pick Date & Time",
    content: DateTimePicker,
  },
  {
    label: "Name & Description",
    content: Description,
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
  justifyContent: "space-around",
  overflow: "hidden",
};

const stepNumberStyles = {
  backgroundColor: "#3f51b5", // Background color for the step number circle
  color: "#FFFFFF", // Text color for the step number
  width: "22px", // Adjust the width as needed
  height: "22px", // Adjust the height as needed
  fontWeight: "bold",
  fontSize: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
};

const ActiveContent = ({ activeStep, eventData, setEventData }) => {
  const CurrentComponent = steps[activeStep].content;
  return <CurrentComponent eventData={eventData} setEventData={setEventData} />;
};

const CreateEventPopUp = ({ open, handleClose }) => {
  const { category, username, authToken } = useArtContext();
  const { data, error, isLoading, createEvent } = useCreateEvent();
  const [activeStep, setActiveStep] = useState(0);
  const [eventData, setEventData] = useState({
    address: "",
    category: category,
    description: "",
    name: "",
    photo: "",
    time: "",
  });

  useEffect(() => {
    setEventData((prev) => {
      return { ...prev, category: category };
    });
  }, [category]);

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
        style={{ textAlign: "center", marginBottom: "10px", color: "#FFFFFF" }}
      >
        {steps[activeStep].label}
      </Typography>
      <ActiveContent
        activeStep={activeStep}
        eventData={eventData}
        setEventData={setEventData}
      />
      <Stack>
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step key={index}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
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
          {activeStep === maxSteps - 1 &&
          eventData.address &&
          eventData.description &&
          eventData.photo &&
          eventData.time ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                createEvent(eventData, authToken);
                handleClose();
                setEventData({
                  address: "",
                  category: category,
                  description: "",
                  name: "",
                  photo: "",
                  time: "",
                });
                setActiveStep(0)
              }}
              style={{ borderRadius: "5px" }}
            >
              Create
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              disabled={activeStep === maxSteps - 1}
              onClick={handleNext}
              style={{ borderRadius: "5px" }}
            >
              Next
            </Button>
          )}
        </div>
      </Stack>
    </Dialog>
  );
};

export default CreateEventPopUp;
