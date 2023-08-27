import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const cardStyles = {
  width: "90%",
  height: "100%",
  paddingBottom: 30,
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 5px 4px rgba(0,0,0,0.25)",
};

const wallpaperImageStyles = {
  width: "100%",
  height: "50%",
  objectFit: "cover",
  borderRadius: "10px",
};

const profilePictureStyles = {
  width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "50%",
  marginTop: "-3.5rem",
};

const titleStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "30px",
};

const bioStyles = {
  ...titleStyles,
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "22.5px",
  color: "rgba(34, 34, 34, 0.5)",
};

const buttonStyles = {
  height: "40px",
  width: "80%",
  background: "linear-gradient(to right, #671AE4, #B75CFF)",
  textTransform: "none",
};

const buttonTextStyles = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "30px",
  marginLeft: 3,
};

const ArtistCard = ({
  artist,
  setSelectedSquare,
  variants,
  selectedSquare,
}) => {
  const { name, bio, profileImage, wallpaperImage } = artist;
  return (
    <Stack
      layout
      direction="column"
      style={cardStyles}
      alignItems={"center"}
      component={motion.div}
      variants={variants}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, type: "spring" }}
    >
      <img src={wallpaperImage} style={wallpaperImageStyles} />
      <img src={profileImage} style={profilePictureStyles} />
      <Stack direction="column" alignItems="center" spacing={2}>
        <Typography style={titleStyles}>{name}</Typography>
        <Typography style={bioStyles} align="center">
          {bio}
        </Typography>
        {selectedSquare ? (
          <Button
            onClick={() => setSelectedSquare(null)}
            variant="contained"
            style={buttonStyles}
          >
            <Typography style={buttonTextStyles}>- Less</Typography>
          </Button>
        ) : (
          <Button
            onClick={() => {
              setSelectedSquare(artist);
              window.scrollTo({
                top: 20,
                behavior: "smooth", // This provides a smooth scroll animation
              });
            }}
            variant="contained"
            style={buttonStyles}
          >
            <Typography style={buttonTextStyles}>+ More</Typography>
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default ArtistCard;
