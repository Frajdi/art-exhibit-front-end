import React, { useState } from "react";
import { Grid, Stack, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

//Styles

//Carusel Styles
const imageGridStyle = {
  display: "flex",
  transition: "transform 0.3s ease-in-out",
};

const imageItemStyle = {
  flex: "0 0 auto",
  width: "27rem",
  height: "30rem",
  textAlign: "center",
  transition: "opacity 0.3s ease-in-out",
};

const centeredImageStyle = {
  opacity: 1,
};

const hiddenImageStyle = {
  filter: 'brightness(70%)'
};
///
const titleStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontSize: "40px",
  width: "100%",
};

const headerImgStyles = {
  width: "98%",
  height: "40rem",
  objectFit: "cover",
};

const secondSectionImg = {
  width: "100%",
  height: "40rem",
  borderRadius: "5px",
  objectFit: "cover",
};

const ApartureTheme = ({ themeContent, setEditeblePath }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { firstSection, secondSection, thirdSection, fourthSection } =
    themeContent;

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === thirdSection.imgGroup.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? thirdSection.imgGroup.length - 1 : prevIndex - 1
    );
  };

  return (
    <Grid container spacing={3} margin={'2rem 2rem 0 2rem'}  width={"auto"}>
      <Grid item xs={12}>
        {/* firstSection.title */}
        <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setEditeblePath("firstSection.title");
          }}
          style={titleStyles}
        >
          {firstSection.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="column" sx={{ width: "100%" }} spacing={4}>
          <img
            onClick={() => {
              setEditeblePath("firstSection.img");
            }}
            style={{ ...headerImgStyles, cursor: "pointer" }}
            src={`data:image/png;base64,${firstSection.img}`}
          />

          {/* firstSection.subtitle */}
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setEditeblePath("firstSection.subtitle");
            }}
            style={{ ...titleStyles, fontSize: "20px" }}
          >
            {firstSection.subtitle}
          </Typography>

          {/* firstSection.date */}
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setEditeblePath("firstSection.date");
            }}
            style={{ ...titleStyles, fontSize: "15px", opacity: "0.7" }}
          >
            {firstSection.date}
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
            {/* secondSection.title */}
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setEditeblePath("secondSection.title");
              }}
              style={titleStyles}
            >
              {secondSection.title}
            </Typography>

            {/* secondSection.subtitle */}
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setEditeblePath("secondSection.subtitle");
              }}
              style={{ ...titleStyles, fontSize: "15px", opacity: "0.7" }}
            >
              {secondSection.subtitle}
            </Typography>
          </Stack>
          <Stack>
            {/* secondSection.content */}
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setEditeblePath("secondSection.content");
              }}
              style={{ ...titleStyles, fontSize: "14px", lineHeight: "30px" }}
            >
              {secondSection.content}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={6} marginTop={7}>
        <Stack
          alignItems={"flex-start"}
          sx={{ overflow: "hidden", width: "40rem" }}
        >
          {/* secondSection.img */}
          <img
            onClick={() => {
              setEditeblePath("secondSection.img");
            }}
            style={{ ...secondSectionImg, cursor: "pointer" }}
            src={`data:image/png;base64,${secondSection.img}`}
          ></img>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction={"column"} width={"100%"}>
          {/* thirdSection.title */}
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setEditeblePath("thirdSection.title");
            }}
            style={{ ...titleStyles, fontSize: "20px" }}
          >
            {thirdSection.title}
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
                color: 'white',
                height: '12%',
                width:'5%'
              }}
            >
              <ArrowBack sx={{height: '100%', width: '100%'}}/>
            </IconButton>
            <IconButton
              onClick={handleNext}
              style={{
                position: "absolute",
                right: "0",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "1",
                color: 'white',
                height: '12%',
                width:'5%'
              }}
            >
              <ArrowForward  sx={{height: '100%', width: '100%'}}/>
            </IconButton>
            <div
              style={{
                ...imageGridStyle,
                transform: `translateX(-${
                  currentImageIndex * (100 / thirdSection.imgGroup.length)
                }%)`,
              }}
            >
              {/* thirdSection.imgGroup */}
              {thirdSection.imgGroup.map((image, index) => (
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
                    src={`data:image/png;base64,${image.img}`}
                    onClick={() => {
                      setEditeblePath(`thirdSection.imgGroup.${index}.img`);
                    }}
                    alt={`Image ${index + 1}`}
                    style={{
                      width: "100%",
                      maxHeight: "30rem",
                      objectFit: "cover",
                      cursor: "pointer",
                      height: '-webkit-fill-available'
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
          onClick={() => {
              setEditeblePath("fourthSection.img");
            }}
            style={{...secondSectionImg, cursor: 'pointer'}}
            src={`data:image/png;base64,${fourthSection.img}`}
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
            onClick={() => {
              setEditeblePath("fourthSection.content");
            }}
              style={{ ...titleStyles, fontSize: "14px", lineHeight: "30px", cursor: 'pointer' }}
            >
              {fourthSection.content}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ApartureTheme;
