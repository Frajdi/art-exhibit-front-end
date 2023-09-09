import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

//Cards
const artworkData = [
    {
      img: "https://wallpapercave.com/wp/BzyvtdP.jpg",
      title: "Artwork 1",
    },
    {
      img: "https://wallpapercave.com/wp/BzyvtdP.jpg",
      title: "Artwork 2",
    },
    {
      img: "https://wallpapercave.com/wp/BzyvtdP.jpg",
      title: "Artwork 3",
    },
    {
      img: "https://wallpapercave.com/wp/BzyvtdP.jpg",
      title: "Artwork 4",
    },
    {
      img: "https://wallpapercave.com/wp/BzyvtdP.jpg",
      title: "Artwork 5",
    }
  ];

//STYLES

const titleStyles = {
  color: "#222222",
  fontFamily: "'Playfair Display', serif",
  fontWeight: 400,
  fontSize: "50px",
  lineHeight: "60px",
  zIndex: 1,
};

const headerStyles = {
  position: "relative",
  background: "url(https://wallpaperaccess.com/full/190324.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "110vh",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  padding: "3rem 4rem",
  overflow: "hidden",
};

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
const DraytonTheme = () => {
  return (
    <Grid container spacing={10} marginBottom={20}>
      <Grid item xs={12}>
        <Stack
          direction={"column"}
          style={headerStyles}
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
          >
            <Typography
              style={{
                ...titleStyles,
                margin: "1rem",
                color: "#FFFFFF",
                letterSpacing: "10px",
              }}
            >
              DRAYTON
            </Typography>
          </Stack>
          <Typography
            style={{
              ...titleStyles,
              letterSpacing: 9,
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "70px",
            }}
          >
            DRAYTON FINE ART
          </Typography>
          <Typography
            style={{
              ...titleStyles,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: "25px",
              marginTop: "2rem",
              letterSpacing: 3,
            }}
          >
            OLD MASTER PAINTINGS LONDON
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
              style={{
                ...titleStyles,
                fontWeight: "400",
                fontSize: "40px",
                letterSpacing: 7,
              }}
            >
              JUSEPE DE RIBERA
            </Typography>
            <Typography
              style={{
                ...titleStyles,
                fontWeight: "500",
                fontSize: "20px",
                opacity: "0.8",
                letterSpacing: 3,
              }}
            >
              DAPIBUS PORTA
            </Typography>
            <Typography
              style={{
                ...titleStyles,
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "32px",
                opacity: "0.6",
              }}
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
          <img
            style={{ width: "40vw", height: "80vh", objectFit: "cover" }}
            src="https://e0.pxfuel.com/wallpapers/587/536/desktop-wallpaper-a-musical-interlude-architecture-art-landscape-beautiful-artwork-fritz-wagner-oldmaster-scenery-wide-screen-instrument-music-painting-wagner-interlude-old-master-cottage.jpg"
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack
          style={{
            ...headerStyles,
            height: "35vh",
            background:
              "url(https://wallpaperaccess.com/full/49618.jpg)",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
        <div style={overlayStyles}></div>
          <Typography
            style={{
              ...titleStyles,
              letterSpacing: 20,
              color: "#FFFFFF",
              fontWeight: 400,
            }}
          >
            DARKEST HOURS
          </Typography>
          <Typography
            style={{
              ...titleStyles,
              letterSpacing: 2,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: "20px",
            }}
          >
            SERIES BY PIPPA MAYER
          </Typography>
        </Stack>
      </Grid>
      <Grid item sx={12}>
        <Stack direction={"row"} padding={"0 8rem"} spacing={7}>
          <img
            style={{ width: "40vw", height: "80vh", objectFit: "cover" }}
            src="https://wallpaperaccess.com/full/1363516.jpg"
          />
          <Stack
            direction={"column"}
            width={"50%"}
            justifyContent={"center"}
            spacing={2}
          >
            <Typography
              style={{
                ...titleStyles,
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "27px",
                opacity: "0.5",
              }}
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Curabitur blandit tempus porttitor. Praesent commodo cursus
              magna, vel scelerisqu
            </Typography>
            <Typography
              style={{
                ...titleStyles,
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "27px",
                opacity: "0.5",
              }}
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Curabitur blandit tempus porttitor. Praesent commodo cursus
              magna, vel scelerisqu
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack
          style={{
            ...headerStyles,
            height: "35vh",
            background:
              "url(https://free4kwallpapers.com/uploads/originals/2015/07/24/nice-art-paintings-hd-wallpaper.jpg)",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
        <div style={overlayStyles}></div>
          <Typography
            style={{
              ...titleStyles,
              letterSpacing: 20,
              color: "#FFFFFF",
              fontWeight: 400,
            }}
          >
            WITHIN MY DREAMS
          </Typography>
          <Typography
            style={{
              ...titleStyles,
              letterSpacing: 2,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: "20px",
            }}
          >
            FEATURED WORKS BY ANDY HOLMES
          </Typography>
        </Stack>
      </Grid>
      {artworkData.map((item) => {
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
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={item.img}
              />
              <Typography
                style={{
                  ...titleStyles,
                  letterSpacing: 2,
                  color: "#222222",
                  fontWeight: 400,
                  fontSize: "20px",
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
