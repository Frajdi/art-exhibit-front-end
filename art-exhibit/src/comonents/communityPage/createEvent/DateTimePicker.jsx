import * as React from "react";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // Enable dark mode
  },
});

const DateTimePicker = ({ eventData, setEventData }) => {
  const handleDateChange = (newDate) => {
    // Ensure newDate is a valid dayjs date
    const dayjsDate = dayjs(newDate);

    // Check if newDate is before the current time
    if (dayjsDate.isBefore(dayjs())) {
      // Handle the case where newDate is before the current time
      console.error("Selected date is before the current time.");
      return;
    }

    // Format the date for storing in the state
    const formattedDate = dayjsDate.toISOString();

    setEventData((prev) => {
      return { ...prev, time: formattedDate };
    });
  };

  // Parse the stored ISO date back to a dayjs object for display
  const displayDate = eventData.time ? dayjs(eventData.time) : null;

  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoItem>
          <StaticDateTimePicker
            renderToolbar={() => <></>}
            sx={{
              height: "90%",
              width: "100%",
              margin: "2rem",
              borderRadius: "10px",
            }}
            value={displayDate || null} // Pass the parsed date for display
            onChange={handleDateChange} // Format for storing in the state
          />
        </DemoItem>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default DateTimePicker;
