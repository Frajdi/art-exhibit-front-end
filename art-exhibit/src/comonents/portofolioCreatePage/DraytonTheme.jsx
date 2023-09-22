import React from "react";
import { useLocation } from "react-router-dom";
import { Grid, Stack, Typography } from "@mui/material";
import {
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//STYLES



const overlayStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: 1,
};

//COMPONENT
const DraytonTheme = ({ themeContent, setEditeblePath, fontFamily }) => {
  const titleStyles = {
    color: "#222222",
    fontFamily: fontFamily,
    fontWeight: 400,
    fontSize: "50px",
    lineHeight: "60px",
    zIndex: 1,
  };
  
  const location = useLocation();

  console.log(location.pathname);

  const {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
    sixthSection,
  } = themeContent;

  const firstSectionStyle = {
    "--background-image-url": `url(data:image/png;base64,${firstSection.img})`,
  };
  const thirdSectionStyle = {
    "--background-image-url": `url(data:image/png;base64,${thirdSection.img})`,
  };
  const fifthSectionStyle = {
    "--background-image-url": `url(data:image/png;base64,${fifthSection.img})`,
  };

  return (
    <Grid container spacing={10} paddingBottom={20}>
      <Grid item xs={12}>
        <Stack
          onClick={() => {
            setEditeblePath("firstSection.img");
          }}
          direction={"column"}
          style={{
            ...firstSectionStyle, // Apply the stackStyle directly to the style prop
            position: "relative",
            background: "var(--background-image-url)", // Use the CSS variable here
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "110vh",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            padding: "3rem 4rem",
            overflow: "hidden",
            cursor: "pointer",
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <div style={overlayStyles}></div>
          <Stack
            sx={{
              position: "absolute",
              top: 20,
              borderBottom: "1px solid white",
              width: "90vw",
              zIndex: 1,
            }}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Typography
              onClick={(e) => {
                e.stopPropagation();
                setEditeblePath("firstSection.headerTitle");
              }}
              style={{
                ...titleStyles,
                margin: "1rem",
                color: "#FFFFFF",
                letterSpacing: "10px",
                cursor: "pointer",
              }}
            >
              {firstSection.headerTitle}
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={5}
              sx={{ mr: 8, color: "white" }}
            >
              <FontAwesomeIcon
                onClick={(e) => {
                  e.stopPropagation();
                  if (
                    location.pathname.includes("/portofolio-edit") ||
                    location.pathname.includes("/portofolio-create")
                  ) {
                    setEditeblePath("firstSection.socialMedia.instagram");
                  } else {
                    window.open(
                      firstSection.socialMedia.instagram,
                      "_blank",
                      "noopener noreferrer"
                    );
                  }
                }}
                style={{ fontSize: "30px", cursor: "pointer" }}
                icon={faInstagram}
              />
              <FontAwesomeIcon
                onClick={(e) => {
                  e.stopPropagation();
                  if (
                    location.pathname.includes("/portofolio-edit") ||
                    location.pathname.includes("/portofolio-create")
                  ) {
                    setEditeblePath("firstSection.socialMedia.twitter");
                  } else {
                    window.open(
                      firstSection.socialMedia.twitter,
                      "_blank",
                      "noopener noreferrer"
                    );
                  }
                }}
                style={{ fontSize: "30px", cursor: "pointer" }}
                icon={faTwitter}
              />
              <FontAwesomeIcon
                onClick={(e) => {
                  e.stopPropagation();
                  if (
                    location.pathname.includes("/portofolio-edit") ||
                    location.pathname.includes("/portofolio-create")
                  ) {
                    setEditeblePath("firstSection.socialMedia.youtube");
                  } else {
                    window.open(
                      firstSection.socialMedia.youtube,
                      "_blank",
                      "noopener noreferrer"
                    );
                  }
                }}
                style={{ fontSize: "30px", cursor: "pointer" }}
                icon={faYoutube}
              />
            </Stack>
          </Stack>
          <Typography
            onClick={(e) => {
              e.stopPropagation();
              setEditeblePath("firstSection.title");
            }}
            style={{
              ...titleStyles,
              letterSpacing: 9,
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "70px",
              cursor: "pointer",
            }}
          >
            {firstSection.title}
          </Typography>
          <Typography
            onClick={(e) => {
              e.stopPropagation();
              setEditeblePath("firstSection.subtitle");
            }}
            style={{
              ...titleStyles,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: "25px",
              marginTop: "2rem",
              letterSpacing: 3,
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
              style={{
                ...titleStyles,
                fontWeight: "400",
                fontSize: "40px",
                letterSpacing: 7,
                cursor: "pointer",
              }}
            >
              {secondSection.title}
            </Typography>
            <Typography
              onClick={() => {
                setEditeblePath("secondSection.subtitle");
              }}
              style={{
                ...titleStyles,
                fontWeight: "500",
                fontSize: "20px",
                opacity: "0.8",
                letterSpacing: 3,
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
                lineHeight: "32px",
                opacity: "0.6",
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
              width: "40vw",
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
            ...thirdSectionStyle,
            background: "var(--background-image-url)",
            position: "relative",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            padding: "3rem 4rem",
            overflow: "hidden",
            height: "35vh",
            cursor: "pointer",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
          <div style={overlayStyles}></div>
          <Typography
            onClick={(e) => {
              e.stopPropagation();
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
              e.stopPropagation();
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
              width: "40vw",
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
            ...fifthSectionStyle,
            position: "relative",
            backgroundSize: "cover",
            background: "var(--background-image-url)",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            padding: "3rem 4rem",
            overflow: "hidden",
            height: "35vh",
            cursor: "pointer",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
          <div style={overlayStyles}></div>
          <Typography
            onClick={(e) => {
              e.stopPropagation();
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
              e.stopPropagation();
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

export default DraytonTheme;
