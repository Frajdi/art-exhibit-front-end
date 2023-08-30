import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import TextAnimation from "../../animationUtils/TextAnimation";

const Footer = () => {
  const titleStyles = {
    textDecoration: "none",
    color: "#C882FF",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: "25px",
    lineHeight: "37.5px",
  };

  const normalTextStyles = {
    ...titleStyles,
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "27px",
    color: "#222222",
    opacity: 0.5,
  };

  const boldTitleStyles = {
    ...normalTextStyles,
    opacity: 1,
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "30px",
  };

  const optionsStyles = {
    ...normalTextStyles,
    lineHeight: "22.5px",
  };

  return (
    <Grid container spacing={12}>
      <Grid item xs={4}>
        <Stack direction={"column"} spacing={2}>
          <TextAnimation color={"#c786ff"}>
            <Typography style={titleStyles}>ArtExhibit</Typography>
          </TextAnimation>
          <TextAnimation color={"#c786ff"}>
            <Typography style={normalTextStyles}>
              The premier Art Exhibition worldwide, offering portfolio and
              collection management, art valuations, event coordination, and
              fostering an artistic community.
            </Typography>
          </TextAnimation>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack direction={"column"} spacing={2}>
          <TextAnimation color={"#c786ff"}>
            <Typography style={boldTitleStyles}>About</Typography>
          </TextAnimation>
          <TextAnimation color={"#c786ff"}>
            <Typography style={optionsStyles}>Company</Typography>
          </TextAnimation>
          <TextAnimation color={"#c786ff"}>
            <Typography style={optionsStyles}>Team</Typography>
          </TextAnimation>
          <TextAnimation color={"#c786ff"}>
            <Typography style={optionsStyles}>Legal</Typography>
          </TextAnimation>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack direction={"column"} spacing={2}>
          <TextAnimation color={"#c786ff"}>
            <Typography style={boldTitleStyles}>Products</Typography>
          </TextAnimation>
          <TextAnimation color={"#c786ff"}>
            <Typography style={optionsStyles}>Artists</Typography>
          </TextAnimation>
          <TextAnimation color={"#c786ff"}>
            <Typography style={optionsStyles}>Collectors</Typography>
          </TextAnimation>
          <TextAnimation color={"#c786ff"}>
            <Typography style={optionsStyles}>Events</Typography>
          </TextAnimation>
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Stack direction={"column"} spacing={2}>
          <TextAnimation color={"#c786ff"}>
            <Typography style={boldTitleStyles}>Contact</Typography>
          </TextAnimation>
          <TextAnimation color={"#c786ff"}>
            <Typography style={optionsStyles}>+012 3456789</Typography>
          </TextAnimation>
          <TextAnimation color={"#c786ff"}>
            <Typography style={optionsStyles}>art@gmail.com</Typography>
          </TextAnimation>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <TextAnimation color={"#c786ff"}>
              <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faYoutube} />
            </TextAnimation>
            <TextAnimation color={"#c786ff"}>
              <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faDiscord} />
            </TextAnimation>
            <TextAnimation color={"#c786ff"}>
              <FontAwesomeIcon
                style={{ fontSize: "25px" }}
                icon={faInstagram}
              />
            </TextAnimation>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Footer;
