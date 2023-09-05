import React, { useState } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const EventCard = ({
  title,
  location,
  date,
  description,
  organizer,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = {
    display: "flex",
    width: "600px",
    height: "300px",
    margin: "16px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
    position: "relative",
    overflow: "hidden",
    backgroundColor: '#E09EFF'
  };

  const imageContainerStyles = {
    width: "100%",
    height: "100%",
    zIndex: 1,
    position: "absolute",
    clipPath: isHovered
      ? "polygon(99% 0, 100% 0, 100% 100%, 1% 100%)"
      : "polygon(0 0, 99% 0, 1% 100%, 0% 100%)",
    transition: "clip-path 0.3s ease-in-out",
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px 0 0 12px",
  };

  const textContainerStyles = {
    flex: 1,
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 0,
  };

  const titleStyles = {
    color: "#FFFFFF",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: "20px",
  }

  const textStyles = {
     ...titleStyles,
     fontWeight: 500
  };

  return (
    <Paper
      elevation={3}
      sx={cardStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={imageContainerStyles}>
        <img src={image} alt={title} style={imageStyles} />
      </div>
      <Stack style={textContainerStyles} alignItems={'space-between'} width={'95%'} height={'95%'}>
        <Stack direction={'column'} spacing={2} padding={'1rem'}>
          <Typography variant="h6" style={textStyles}>
            {title}
          </Typography>
          <Typography style={textStyles} width={'50%'} variant="body1">{description}</Typography>
        </Stack>
        <Stack alignItems={'flex-end'} justifyContent={'center'} padding={'1rem'} sx={{position: 'absolute', bottom: '2rem', right: '2rem'}} >
          <Typography variant="subtitle1" style={textStyles}>
            <strong>Date:</strong> {date}
          </Typography>
          <Typography variant="subtitle1" style={textStyles}>
            <strong>Organizer:</strong> {organizer}
          </Typography>
          <Typography variant="subtitle1" style={textStyles}>
            <strong>Location:</strong> {location}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default EventCard;
