import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextAnimation from "../../animationUtils/TextAnimation";
import { useArtContext } from "../../state/AppContext";

const contentLines = [
  "We place a strong emphasis on design and individuality, offering",
  "artists like you a canvas to vividly curate your online portfolio.",
  "Our platform is artist-friendly, ensuring you can seamlessly craft",
  "bespoke,responsive portfolio pages that truly represent your artistry.",
  "With no coding required, it's a breeze to assemble a captivating digital",
  "gallery, showcasing your unique talents and creations to the world.",
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
  width: "411.6px",
  height: "504px",
  borderRadius: "5px",
};

const PersonalizeSections = () => {
  const navigate = useNavigate();

  const { authToken, setIsLogIn } = useArtContext();

  const handleClickOpen = () => {
    setIsLogIn(false);
  };

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
              <TextAnimation key={item} color={"#FFFFFF"}>
                <Typography style={contentStyles}>{item}</Typography>
              </TextAnimation>
            ))}
          </Stack>
          <Button
            style={buttonStyles}
            onClick={() => {
              if (authToken) {
                navigate("/portofolio");
              } else {
                handleClickOpen();
              }
            }}
          >
            <TextAnimation color={"#C786FF"}>
              <Typography style={buttonTextStyles}>Build Portofolio</Typography>
            </TextAnimation>
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={5}>
        <Stack alignItems={"flex-end"}>
          <img
            style={imageStyles}
            src="https://img.freepik.com/premium-photo/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1.jpg"
          ></img>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PersonalizeSections;
