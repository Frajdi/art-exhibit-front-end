import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  maxWidth: 600,
  margin: "auto",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  borderRadius: "12px",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const StyledCardMedia = styled(CardMedia)({
  width: "30%", // Fixed width as a percentage
  height: 300,
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark glass effect background color
  color: "white", // White text color
  borderRadius: "0 12px 12px 0", // Rounded left border
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  position: "relative",
}));

const DecorativeLine = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: "100%",
  width: "5px",
  height: "100%",
  backgroundColor: "#c786ff", // Color for the decorative line
  borderRadius: "0 12px 12px 0",
}));

const EventCard = ({ title, location, date, description, organizer, image }) => {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        alt={title}
        image={image}
      />
      <StyledCardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          <strong>Location:</strong> {location}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          <strong>Date:</strong> {date}
        </Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          <strong>Organizer:</strong> {organizer}
        </Typography>
        <DecorativeLine />
      </StyledCardContent>
    </StyledCard>
  );
};

export default EventCard;
