import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EventCard from "./EventCard";
import useGetAllEvents from "../../commands/getAllEvents";
import { IconButton, Paper } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const titleStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "40px",
  lineHeight: "60px",
};

const containerStyles = {
  marginTop: "5rem",
  marginBottom: "3rem",
};

const buttonStyles = {
  width: "320px",
  height: "70px",
  borderRadius: "120px",
  color: "black",
};

const buttonTextStyles = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "36px",
  textTransform: "none",
};

const AllEvents = ({ setSeeAllEvents }) => {
  const [events, setEvents] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { data, error, isLoading, getEvents } = useGetAllEvents();

  const filterAndSortEventsByCurrentTime = (array) => {
    const currentTime = new Date().getTime();
    
    // Filter events by time (keep events with times greater than or equal to the current time)
    const filteredArray = array.filter((item) => {
      const eventTime = new Date(item.time).getTime();
      return eventTime >= currentTime;
    });
  
    // Sort filtered events by time (from closest to furthest)
    filteredArray.sort((a, b) => {
      const timeA = new Date(a.time).getTime();
      const timeB = new Date(b.time).getTime();
      const timeDifferenceA = Math.abs(timeA - currentTime);
      const timeDifferenceB = Math.abs(timeB - currentTime);
      return timeDifferenceA - timeDifferenceB;
    });
  
    return filteredArray;
  };
  
  

  useEffect(() => {
    getEvents(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (data) {
      
      setEvents(filterAndSortEventsByCurrentTime(data));
    }
  }, [data]);

  return (
    <Grid container style={containerStyles} spacing={5}>
      <Grid item xs={12}>
        <Stack alignItems={"center"} spacing={3}>
          <Typography style={titleStyles}>All Events</Typography>
          <Button
            startIcon={<KeyboardBackspaceIcon fontSize="80px" />}
            variant="contained"
            style={{ ...buttonStyles, background: "#E7DEEF" }}
            onClick={() => {
              setSeeAllEvents(false);
            }}
          >
            <Typography style={{ ...buttonTextStyles, color: "#222222" }}>
              Go Back
            </Typography>
          </Button>
        </Stack>
      </Grid>
      {events !== null &&
        events.map(
          ({ name, address, time, description, category, photo, id, username }) => (
            <Grid item xs={6} key={id}>
              <Stack alignItems={"center"} width={"100%"}>
                <EventCard
                  name={name}
                  address={address}
                  time={time}
                  description={description}
                  username={username}
                  photo={photo}
                />
              </Stack>
            </Grid>
          )
        )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "2rem 0 0 2.5rem",
        }}
      >
        <Paper
          elevation={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px", // Add padding for the glass effect
            background: "rgba(255, 255, 255, 0.1)", // Glassmorphism effect
            backdropFilter: "blur(5px)", // Glassmorphism effect
            borderRadius: "10px", // Rounded corners
          }}
        >
          <IconButton
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage + 1 === 1}
            size="large"
            style={{
              backgroundColor: currentPage + 1 === 1 ? "#e7deef" : "#007BFF",
              color: "white",
              marginRight: "10px", // Adjust the spacing
              borderRadius: "8px", // Add rounded corners
            }}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{
              margin: "0 20px", // Adjust the spacing
              color: "#007BFF", // Text color
              fontWeight: "bold", // Make it bold
            }}
          >
            {currentPage + 1}
          </Typography>
          <IconButton
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={events?.length < 6}
            size="large"
            style={{
              backgroundColor: events?.length < 6 ? "#e7deef" : "#007BFF",
              color: "white",
              marginLeft: "10px", // Adjust the spacing
              borderRadius: "8px", // Add rounded corners
            }}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Paper>
      </div>
    </Grid>
  );
};

export default AllEvents;
