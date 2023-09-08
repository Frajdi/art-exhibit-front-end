import {
  Grid,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

//Fake data

const carouselImages = [
  "https://artlogic-res.cloudinary.com/w_1500,h_1500,c_limit,f_auto,fl_lossy,q_auto/ws-gtaperture2/usr/library/images/main/16/annie-spratt-695519-unsplash.jpg",
  "https://artlogic-res.cloudinary.com/w_1500,h_1500,c_limit,f_auto,fl_lossy,q_auto/ws-gtaperture2/usr/library/images/main/16/eberhard-grossgasteiger-760243-unsplash.jpg",
  "https://artlogic-res.cloudinary.com/w_1500,h_1500,c_limit,f_auto,fl_lossy,q_auto/ws-gtaperture2/usr/library/images/main/16/annie-spratt-695519-unsplash.jpg",
  "https://artlogic-res.cloudinary.com/w_1500,h_1500,c_limit,f_auto,fl_lossy,q_auto/ws-gtaperture2/usr/library/images/main/16/eberhard-grossgasteiger-760243-unsplash.jpg",
  "https://artlogic-res.cloudinary.com/w_1500,h_1500,c_limit,f_auto,fl_lossy,q_auto/ws-gtaperture2/usr/library/images/main/16/annie-spratt-695519-unsplash.jpg",
  "https://artlogic-res.cloudinary.com/w_1500,h_1500,c_limit,f_auto,fl_lossy,q_auto/ws-gtaperture2/usr/library/images/main/16/eberhard-grossgasteiger-760243-unsplash.jpg",
];

//Styles

//Carusel Styles
const imageGridStyle = {
  display: "flex",
  transition: "transform 0.3s ease-in-out",
};

const imageItemStyle = {
    flex: '0 0 auto',
    width: '27rem',
    height: '100%',
    textAlign: 'center',
    transition: 'opacity 0.3s ease-in-out',
  };

const centeredImageStyle = {
  opacity: 1,
};

const hiddenImageStyle = {
  opacity: 0.5,
};
///
const titleStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontSize: "40px",
  width: "100%",
};

const headerImgStyles = {
  width: "93%",
  height: "40rem",
  objectFit: "cover",
};

const secondSectionImg = {
  width: "100%",
  height: "40rem",
  borderRadius: "5px",
  objectFit: "cover",
};

const ApartureTheme = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <Grid container spacing={3} margin={4} overflow={"hidden"}>
      <Grid item xs={12}>
        <Typography style={titleStyles}>Aperture</Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack
          direction="column"
          sx={{ overflow: "hidden", width: "100%" }}
          spacing={4}
        >
          <img
            style={headerImgStyles}
            src={
              "https://artlogic-res.cloudinary.com/w_2000,h_2000,c_limit,f_auto,fl_lossy,q_auto/ws-gtaperture2/usr/library/images/main/1/eberhard-grossgasteiger-389784-unsplash.jpg"
            }
          />
          <Typography style={{ ...titleStyles, fontSize: "20px" }}>
            JEREMY BECK : DARKEST HOURS
          </Typography>
          <Typography
            style={{ ...titleStyles, fontSize: "15px", opacity: "0.7" }}
          >
            8 - 19 JANUARY 2019
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} marginTop={10}>
        <Stack
          spacing={5}
          justifyContent={"center"}
          height={"100%"}
          paddingRight={15}
        >
          <Stack>
            <Typography style={titleStyles}>JEREMY BECK</Typography>
            <Typography
              style={{ ...titleStyles, fontSize: "15px", opacity: "0.7" }}
            >
              FEATURED PRINTS
            </Typography>
          </Stack>
          <Stack>
            <Typography
              style={{ ...titleStyles, fontSize: "14px", lineHeight: "30px" }}
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Curabitur blandit tempus porttitor. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Donec ullamcorper
              nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque
              ornare sem lacinia quam venenatis vestibulum.
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={6} marginTop={7}>
        <Stack
          alignItems={"flex-start"}
          sx={{ overflow: "hidden", width: "40rem" }}
        >
          <img
            style={secondSectionImg}
            src="https://img.freepik.com/premium-photo/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1.jpg"
          ></img>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction={"column"} width={"100%"}>
          <Typography style={{ ...titleStyles, fontSize: "20px" }}>
            LATEST PRINTS
          </Typography>
          <div
            style={{
              marginTop: "16px",
              position: "relative",
              width: "92vw",
              overflow: "hidden",
            }}
          >
            <IconButton
              onClick={handlePrev}
              style={{
                position: "absolute",
                left: "0",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "1",
              }}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              onClick={handleNext}
              style={{
                position: "absolute",
                right: "0",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "1",
              }}
            >
              <ArrowForward />
            </IconButton>
            <div
              style={{
                ...imageGridStyle,
                transform: `translateX(-${
                  currentImageIndex * (100 / carouselImages.length)
                }%)`,
              }}
            >
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  style={{
                    ...imageItemStyle,
                    ...(index === currentImageIndex
                      ? centeredImageStyle
                      : hiddenImageStyle),
                  }}
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    style={{
                      width: "100%",
                      maxHeight: "30rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Stack>
      </Grid>
      <Grid item xs={6} marginTop={7}>
        <Stack
          alignItems={"flex-start"}
          sx={{ overflow: "hidden", width: "40rem" }}
        >
          <img
            style={secondSectionImg}
            src="https://img.freepik.com/premium-photo/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1.jpg"
          ></img>
        </Stack>
      </Grid>
      <Grid item xs={6} marginTop={10}>
        <Stack
          spacing={5}
          justifyContent={"center"}
          height={"100%"}
          paddingRight={15}
        >
          <Stack>
            <Typography
              style={{ ...titleStyles, fontSize: "14px", lineHeight: "30px" }}
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Curabitur blandit tempus porttitor. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Donec ullamcorper
              nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque
              ornare sem lacinia quam venenatis vestibulum.
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ApartureTheme;
