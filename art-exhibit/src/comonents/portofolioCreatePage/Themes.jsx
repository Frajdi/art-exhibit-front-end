import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextAnimation from "../../animationUtils/TextAnimation";
import ThemeCard from "./ThemeCard";

const themesData = [
  {
    img: "https://artlogic.net/images/websites/themes/apeture.jpg",
    title: "Aperture",
    description:
      "An ultra-minimal, contemporary design which ensures artworks are well presented and respected.",
  },
  {
    img: "https://artlogic.net/images/websites/themes/aspect.jpg",
    title: "Aspect",
    description:
      "Striking full-bleed slideshow and header images allow you to create bold, immersive experiences that will amplify your Art Work",
  },
  {
    img: "https://artlogic.net/images/websites/themes/drayton.jpg",
    title: "Drayton",
    description:
      "Perfect for displaying old masters and antiques in a contemporary online setting.",
  },
];

const titleStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "50px",
  lineHeight: "60px",
  width: "100%",
  marginTop: "2rem",
};

const gridItemStyles = {
  background: `url(https://img.freepik.com/free-vector/minimalist-white-abstract-wallpaper_23-2148816029.jpg?w=2000)`,
  backgroundSize: "cover", // Fit image to the screen
  backgroundRepeat: "no-repeat", // Prevent image from repeating
  backgroundPosition: "center center", // Center the image
  height: "110vh", // Set the height to fill the entire viewport
  backdropFilter: "blur(10px)",
};

const Themes = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={4}
      padding={"0 4rem 4rem 4rem"}
      style={gridItemStyles}
    >
      <Grid item xs={12}>
        <Stack width={"100%"} alignItems={"center"} justifyContent={"center"}>
          <TextAnimation color={"#222222"}>
            <Typography align="center" style={titleStyles}>
              Choose a Theme
            </Typography>
          </TextAnimation>
        </Stack>
      </Grid>
      {themesData.map(({ img, title, description }) => {
        return (
          <Grid item xs={4} marginTop={10} key={title}>
            <ThemeCard
              img={img}
              title={title}
              description={description}
              onClick={() =>
                navigate(`/portofolio-create/${title.toLowerCase()}`)
              }
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Themes;
