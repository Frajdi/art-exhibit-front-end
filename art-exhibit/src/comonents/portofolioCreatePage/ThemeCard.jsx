import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const imgStyles = {
  width: "100%",
  borderRadius: "10px",
  objectFit: "cover",
};

const titleStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "25px",
  width: "100%",
};

const ThemeCard = ({ img, title, description, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = {
    borderRadius: "10px",
    height: "28rem",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
    backgroundColor: isHovered ? "#f0f0f0" : "white", // Change background color on hover
    transform: isHovered ? "scale(1.05)" : "scale(1)", // Scale up on hover
  };

  return (
    <Stack direction="column">
      <Paper
        onClick={onClick}
        elevation={10}
        sx={cardStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Stack direction={"column"} spacing={3} padding={3}>
          <Typography style={titleStyles} align="center">
            {title}
          </Typography>
          <img style={imgStyles} src={img} alt={title} />
          <Typography
            style={{ ...titleStyles, fontSize: "15px", opacity: "0.7" }}
          >
            {description}
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ThemeCard;
