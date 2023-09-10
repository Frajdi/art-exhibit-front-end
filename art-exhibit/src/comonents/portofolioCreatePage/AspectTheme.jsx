import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

//styles
const titleStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "50px",
  lineHeight: "60px",
};

const overlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: 0,
};

const AspectTheme = ({ themeContent, setEditeblePath }) => {
  const {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
    sixthSection,
  } = themeContent;


  const firstSectionStyle = {
    '--background-image-url': `url(data:image/png;base64,${firstSection.img})`,
  };
  const thirdSectionStyle = {
    '--background-image-url': `url(data:image/png;base64,${thirdSection.img})`,
  };
  const fifthSectionStyle = {
    '--background-image-url': `url(data:image/png;base64,${fifthSection.img})`,
  };

  return (
    <Grid container spacing={10} paddingBottom={'10rem'}>
      <Grid item xs={12}>
        <Typography
          onClick={() => {
            setEditeblePath("firstSection.headerTitle");
          }}
          style={{ ...titleStyles, margin: "1rem", cursor: "pointer" }}
        >
          {firstSection.headerTitle}
        </Typography>
        <Stack
          onClick={() => {
            setEditeblePath("firstSection.img");
          }}
          direction={"column"}
          style={{
            ...firstSectionStyle, // Apply the stackStyle directly to the style prop
            position: "relative",
            background: 'var(--background-image-url)',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "80vh",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            padding: "3rem 4rem",
            overflow: "hidden",
            cursor: "pointer",
          }}
          justifyContent={"flex-end"}
        >
          <div style={overlayStyles}></div>
          <Typography
            onClick={(e) => {
              e.stopPropagation()
              setEditeblePath("firstSection.title");
            }}
            style={{
              ...titleStyles,
              letterSpacing: 5,
              color: "#FFFFFF",
              fontWeight: 400,
              zIndex: 1,
              cursor: "pointer",
            }}
          >
            {firstSection.title}
          </Typography>
          <Typography
            onClick={(e) => {
              e.stopPropagation()
              setEditeblePath("firstSection.subtitle");
            }}
            style={{
              ...titleStyles,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: "20px",
              marginBottom: "3rem",
              zIndex: 1,
              cursor: "pointer",
            }}
          >
            {firstSection.subtitle}
          </Typography>
        </Stack>
      </Grid>
      <Grid item sx={12}>
        <Stack direction={"row"} padding={"0 8rem"} spacing={7}>
          <Stack
            direction={"column"}
            width={"50%"}
            justifyContent={"center"}
            spacing={2}
          >
            <Typography
              onClick={() => {
                setEditeblePath("secondSection.title");
              }}
              style={{ ...titleStyles, fontWeight: "400", cursor: "pointer" }}
            >
              {secondSection.title}
            </Typography>
            <Typography
              onClick={() => {
                setEditeblePath("secondSection.subtitle");
              }}
              style={{
                ...titleStyles,
                fontWeight: "400",
                fontSize: "25px",
                opacity: "0.7",
                cursor: "pointer",
              }}
            >
              {secondSection.subtitle}
            </Typography>
            <Typography
              onClick={() => {
                setEditeblePath("secondSection.content");
              }}
              style={{
                ...titleStyles,
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "22px",
                opacity: "0.5",
                cursor: "pointer",
              }}
            >
              {secondSection.content}
            </Typography>
          </Stack>
          <img
            onClick={() => {
              setEditeblePath("secondSection.img");
            }}
            style={{
              width: "50vw",
              height: "80vh",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={`data:image/png;base64,${secondSection.img}`}
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack
          onClick={() => {
            setEditeblePath("thirdSection.img");
          }}
          style={{
            ...thirdSectionStyle, // Apply the stackStyle directly to the style prop
            position: "relative",
            background: 'var(--background-image-url)',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            padding: "3rem 0 5rem 4rem",
            height: "30vh",
            cursor: "pointer",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
          <Typography
            onClick={(e) => {
              e.stopPropagation()
              setEditeblePath("thirdSection.title");
            }}
            style={{
              ...titleStyles,
              letterSpacing: 20,
              color: "#FFFFFF",
              fontWeight: 400,
              cursor: "pointer",
            }}
          >
            {thirdSection.title}
          </Typography>
          <Typography
            onClick={(e) => {
              e.stopPropagation()
              setEditeblePath("thirdSection.subtitle");
            }}
            style={{
              ...titleStyles,
              letterSpacing: 2,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            {thirdSection.subtitle}
          </Typography>
        </Stack>
      </Grid>
      <Grid item sx={12}>
        <Stack direction={"row"} padding={"0 8rem"} spacing={7}>
          <img
            onClick={() => {
              setEditeblePath("fourthSection.img");
            }}
            style={{
              width: "50vw",
              height: "80vh",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={`data:image/png;base64,${fourthSection.img}`}
          />
          <Stack
            direction={"column"}
            width={"50%"}
            justifyContent={"center"}
            spacing={2}
          >
            <Typography
              onClick={() => {
                setEditeblePath("fourthSection.firstContent");
              }}
              style={{
                ...titleStyles,
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "27px",
                opacity: "0.5",
                cursor: "pointer",
              }}
            >
              {fourthSection.firstContent}
            </Typography>
            <Typography
              onClick={() => {
                setEditeblePath("fourthSection.secondContent");
              }}
              style={{
                ...titleStyles,
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "27px",
                opacity: "0.5",
                cursor: "pointer",
              }}
            >
              {fourthSection.secondContent}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack
          onClick={() => {
            setEditeblePath("fifthSection.img");
          }}
          style={{
            ...fifthSectionStyle, // Apply the stackStyle directly to the style prop
            position: "relative",
            background: 'var(--background-image-url)',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            padding: "3rem 0 5rem 4rem",
            height: "35vh",
            cursor: "pointer",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
          <Typography
            onClick={(e) => {
              e.stopPropagation()
              setEditeblePath("fifthSection.title");
            }}
            style={{
              ...titleStyles,
              letterSpacing: 20,
              color: "#FFFFFF",
              fontWeight: 400,
              cursor: "pointer",
            }}
          >
            {fifthSection.title}
          </Typography>
          <Typography
            onClick={(e) => {
              e.stopPropagation()
              setEditeblePath("fifthSection.subtitle");
            }}
            style={{
              ...titleStyles,
              letterSpacing: 2,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            {fifthSection.subtitle}
          </Typography>
        </Stack>
      </Grid>
      {sixthSection.content.map((item, index) => {
        return (
          <Grid item xs={4}>
            <Stack
              direction={"column"}
              width={"80%"}
              justifyContent={"center"}
              paddingLeft={5}
              height={"28rem"}
            >
              <img
                onClick={() => {
                  setEditeblePath(`sixthSection.content.${index}.img`);
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                src={`data:image/png;base64,${item.img}`}
              />
              <Typography
                onClick={() => {
                  setEditeblePath(`sixthSection.content.${index}.title`);
                }}
                style={{
                  ...titleStyles,
                  letterSpacing: 2,
                  color: "#222222",
                  fontWeight: 400,
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                {item.title}
              </Typography>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AspectTheme;
