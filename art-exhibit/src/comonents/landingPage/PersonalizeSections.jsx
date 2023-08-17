import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextAnimation from "../../animationUtils/TextAnimation";

const contentLines = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet nisl",
  "luctus, scelerisque mauris ac, commodo turpis. Fusce tincidunt tincidunt",
  "rhoncus. Nulla dapibus fermentum egestas. Sed congue nisi vitae ornare",
  "suscipit. Proin non neque a ex iaculis porttitor. Integer tempus mauris augue.",
  "Sed at rhoncus diam. Quisque sed tellus at est dictum tincidunt. Nulla blandit",
  "nulla et vestibulum eleifend. Cras ornare dignissim rutrum.",
];

const titleStyles = {
  textDecoration: "none",
  color: "#FFFFFF",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "60px",
  lineHeight: "76.8px",
};

const contentStyles = {
  ...titleStyles,
  fontWeight: "400px",
  fontSize: "16px",
  lineHeight: "25.6px",
};

const buttonStyles = {
  backgroundColor: "#F5E9FF",
  color: "black",
  borderRadius: "50px",
  padding: "10px 20px",
  textTransform: "none",
  width: "30%",
};

const buttonTextStyles = {
  ...titleStyles,
  fontSize: "20px",
  lineHeight: "30px",
  color: "#222222",
};

const imageStyles = {
    width: '411.6px',
    height: '504px',
    borderRadius: '5px'
}

const PersonalizeSections = () => {
  return (
    <Grid container>
      <Grid item xs={7}>
        <Stack spacing={5}>
          <Stack>
            <TextAnimation color={"#FFFFFF"}>
              <Typography style={titleStyles}>Personalize your</Typography>
            </TextAnimation>
            <TextAnimation color={"#FFFFFF"}>
              <Typography style={titleStyles}>portofolio</Typography>
            </TextAnimation>
          </Stack>
          <Stack>
            {contentLines.map((item) => (
              <TextAnimation color={"#FFFFFF"}>
                <Typography style={contentStyles}>{item}</Typography>
              </TextAnimation>
            ))}
          </Stack>
          <Button style={buttonStyles}>
          <TextAnimation color={"#C786FF"}><Typography style={buttonTextStyles}>Build Portofolio</Typography></TextAnimation>
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={5}>
      <Stack alignItems={'flex-end'}>
        <img style={imageStyles} src="https://img.freepik.com/premium-photo/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1.jpg"></img>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PersonalizeSections;
