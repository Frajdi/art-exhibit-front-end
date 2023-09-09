import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

//Fake Data

//Cards
const artworkData = [
  {
    img: "https://www.scotsman.com/webimg/b25lY21zOjJkMDY1MGVmLWRiZmQtNDQyNC1iMzMyLTk3MmM3YzkwYWZjMDo4NzUyNzZlZi0xMThjLTQwNjktODBkZC0zOTUwNmZjM2ZjMGE=.jpg?width=1200&enable=upscale",
    title: "Artwork 1",
  },
  {
    img: "https://www.scotsman.com/webimg/b25lY21zOjJkMDY1MGVmLWRiZmQtNDQyNC1iMzMyLTk3MmM3YzkwYWZjMDo4NzUyNzZlZi0xMThjLTQwNjktODBkZC0zOTUwNmZjM2ZjMGE=.jpg?width=1200&enable=upscale",
    title: "Artwork 2",
  },
  {
    img: "https://www.scotsman.com/webimg/b25lY21zOjJkMDY1MGVmLWRiZmQtNDQyNC1iMzMyLTk3MmM3YzkwYWZjMDo4NzUyNzZlZi0xMThjLTQwNjktODBkZC0zOTUwNmZjM2ZjMGE=.jpg?width=1200&enable=upscale",
    title: "Artwork 3",
  },
  {
    img: "https://www.scotsman.com/webimg/b25lY21zOjJkMDY1MGVmLWRiZmQtNDQyNC1iMzMyLTk3MmM3YzkwYWZjMDo4NzUyNzZlZi0xMThjLTQwNjktODBkZC0zOTUwNmZjM2ZjMGE=.jpg?width=1200&enable=upscale",
    title: "Artwork 4",
  },
  {
    img: "https://www.scotsman.com/webimg/b25lY21zOjJkMDY1MGVmLWRiZmQtNDQyNC1iMzMyLTk3MmM3YzkwYWZjMDo4NzUyNzZlZi0xMThjLTQwNjktODBkZC0zOTUwNmZjM2ZjMGE=.jpg?width=1200&enable=upscale",
    title: "Artwork 5",
  },
  {
    img: "https://www.scotsman.com/webimg/b25lY21zOjJkMDY1MGVmLWRiZmQtNDQyNC1iMzMyLTk3MmM3YzkwYWZjMDo4NzUyNzZlZi0xMThjLTQwNjktODBkZC0zOTUwNmZjM2ZjMGE=.jpg?width=1200&enable=upscale",
    title: "Artwork 6",
  },
  {
    img: "https://www.scotsman.com/webimg/b25lY21zOjJkMDY1MGVmLWRiZmQtNDQyNC1iMzMyLTk3MmM3YzkwYWZjMDo4NzUyNzZlZi0xMThjLTQwNjktODBkZC0zOTUwNmZjM2ZjMGE=.jpg?width=1200&enable=upscale",
    title: "Artwork 7",
  },
  {
    img: "https://www.scotsman.com/webimg/b25lY21zOjJkMDY1MGVmLWRiZmQtNDQyNC1iMzMyLTk3MmM3YzkwYWZjMDo4NzUyNzZlZi0xMThjLTQwNjktODBkZC0zOTUwNmZjM2ZjMGE=.jpg?width=1200&enable=upscale",
    title: "Artwork 8",
  },
  {
    img: "https://www.scotsman.com/webimg/b25lY21zOjJkMDY1MGVmLWRiZmQtNDQyNC1iMzMyLTk3MmM3YzkwYWZjMDo4NzUyNzZlZi0xMThjLTQwNjktODBkZC0zOTUwNmZjM2ZjMGE=.jpg?width=1200&enable=upscale",
    title: "Artwork 9",
  },
];

//styles
const titleStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "50px",
  lineHeight: "60px",
};

const headerStyles = {
  background:
    "url(https://p4.wallpaperbetter.com/wallpaper/176/310/470/jellyfish-underwater-blue-hd-wallpaper-preview.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "88vh",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  padding: "3rem 0 5rem 4rem",
};

const AspectTheme = () => {
  return (
    <Grid container spacing={10} marginBottom={20}>
      <Grid item xs={12}>
        <Typography style={{ ...titleStyles, margin: "1rem" }}>
          Aspect
        </Typography>
        <Stack
          direction={"column"}
          style={headerStyles}
          justifyContent={"flex-end"}
        >
          <Typography
            style={{
              ...titleStyles,
              letterSpacing: 5,
              color: "#FFFFFF",
              fontWeight: 400,
            }}
          >
            JEREMY BLACK : BLUE DEEP
          </Typography>
          <Typography
            style={{
              ...titleStyles,
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize: "20px",
              marginBottom: "3rem",
            }}
          >
            COMING SOON TO THE VIEWING ROOM
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
            <Typography style={{ ...titleStyles, fontWeight: "400" }}>
              JEREMY BECK
            </Typography>
            <Typography
              style={{
                ...titleStyles,
                fontWeight: "400",
                fontSize: "25px",
                opacity: "0.7",
              }}
            >
              FEATURED PRINTS
            </Typography>
            <Typography
              style={{
                ...titleStyles,
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "22px",
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
          <img
            style={{ width: "50vw", height: "80vh", objectFit: "cover" }}
            src="https://img.redbull.com/images/c_crop,x_1576,y_0,h_3648,w_2736/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/8/7/vfumquitffikquedbfod/jamie-o-brien-oahu"
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack
          style={{ ...headerStyles, height: "30vh" }}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
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
            style={{ width: "50vw", height: "80vh", objectFit: "cover" }}
            src="https://img.redbull.com/images/c_crop,x_1576,y_0,h_3648,w_2736/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/8/7/vfumquitffikquedbfod/jamie-o-brien-oahu"
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
              "url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg)",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
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

export default AspectTheme;
