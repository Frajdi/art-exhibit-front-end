import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EventCard from "./EventCard";

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

const fakeData = [
  {
    title: "Art Exhibition: Modern Masterpieces",
    location: "City Art Gallery",
    date: "2023-10-15",
    description:
      "Explore a collection of modern art masterpieces at our gallery.",
    organizer: "City Art Society",
    image:
      "https://cpimg.tistatic.com/06448460/b/4/Modern-Art-Handmade-Canvas-Oil-Painting.jpg",
  },
  {
    title: "Sculpture Workshop: Abstract Creations",
    location: "Art Studio XYZ",
    date: "2023-11-05",
    description: "Join our sculpture workshop and create abstract art pieces.",
    organizer: "Art Creations Workshop",
    image:
      "https://i.pinimg.com/550x/b1/e3/db/b1e3dbadf64b89e35dc11e803de90b60.jpg",
  },
  {
    title: "Art Talk: Impressionism in the 21st Century",
    location: "Community Center",
    date: "2023-12-02",
    description:
      "Join us for a discussion on Impressionism's influence on contemporary art.",
    organizer: "Art Enthusiasts Club",
    image: "https://s3.amazonaws.com/showflipper/product/69601536314088.jpg",
  },
  ,
  {
    title: "Mixed Media Art Workshop",
    location: "Art Studio ABC",
    date: "2024-01-20",
    description: "Learn the art of mixed media in this creative workshop.",
    organizer: "Artistry Academy",
    image:
      "https://res.cloudinary.com/indonesiadesign/image/upload/ar_1:1,f_auto,fl_progressive,w_1080/the-scream.jpg",
  },
];

const AllEvents = ({ setSeeAllEvents }) => {
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
      {fakeData.map(
        ({ title, location, date, description, organizer, image }) => (
          <Grid item xs={6}>
          <Stack alignItems={"center"} width={'100%'}>
            <EventCard
              title={title}
              location={location}
              date={date}
              description={description}
              organizer={organizer}
              image={image}
            />
          </Stack>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default AllEvents;
