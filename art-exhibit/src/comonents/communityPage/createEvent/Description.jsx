import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const Description = ({ eventData, setEventData }) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      style={{ width: "100%", height: "80%" }} // Increase the height as needed
    >
      <TextField
        label="Event Description"
        variant="outlined"
        multiline
        style={{ width: "80%" }}
        minRows={10} // You can adjust the number of rows as needed
        value={eventData.description}
        onChange={(e) => {
          setEventData((prev) => {
            return { ...prev, description: e.target.value };
          });
        }}
        InputProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#FFFFFF",
            width: "100%",
            borderRadius: "15px 15px 0 15px",
            border: '1px solid #424a53',
            boxShadow: '0px 2px 24px #003A75'
          },
        }}
        InputLabelProps={{
          sx: {
            color: "#CCCCCC", // Change the label text color
            fontSize: '17px'
          },
        }}
      />
    </Stack>
  );
};

export default Description;
