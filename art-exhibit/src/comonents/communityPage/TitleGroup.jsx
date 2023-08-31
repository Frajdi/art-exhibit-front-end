import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";


const titleStyles = {
    color: "#222222",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "60px",
  };

const buttonStyles = {
  width: "320px",
  height: "70px",
  borderRadius: "120px",
};

const buttonTextStyles = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "36px",
  textTransform: "none",
};

const TitleGroup = ({
  title,
  seeAllText,
  createNewText,
  seeAllFunction,
  createNewFunction,
}) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={3}
    >
      <Typography style={titleStyles}>{title}</Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={8}
      >
        <Button
          variant="contained"
          onClick={() => {
            seeAllFunction();
          }}
          style={{ ...buttonStyles, background: "#7324E8" }}
        >
          <Typography style={{ ...buttonTextStyles, color: "#FFFFFF" }}>
            See all {seeAllText}
          </Typography>
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            createNewFunction();
          }}
          style={{ ...buttonStyles, background: "#E7DEEF" }}
        >
          <Typography style={{ ...buttonTextStyles, color: "#222222" }}>
            Create new {createNewText}
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default TitleGroup;
