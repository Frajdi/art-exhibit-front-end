import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ApartureTheme from "./ApartureTheme";
import AspectTheme from "./AspectTheme";
import DraytonTheme from "./DraytonTheme";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import usePortofolioById from "../../commands/getPortofolioById";

//Styles

const editSectionStyles = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  borderRadius: "50px 50px 0 0",
  backgroundColor: "rgba(245,233,255, 0.6)",
  border: "1px solid rgba(255, 255, 255, 0.8)",
  backdropFilter: " blur( 50px )",
  height: "20%",
  zIndex: 20,
  overflow: "hidden",
};

const buttonStyles = {
  width: "25%",
  height: "50%",
  background: "#e0e0e0",
  color: "#333333",
  textTransform: "none",
  borderRadius: "500px",
  border: "1px solid rgba(255, 255, 255, 0.8)",
  "&:hover": {
    color: "white",
  },
};

const ButtonTextStyles = {
  fontFamily: "Poppins, sans-serif",
  fontSize: "23px",
  fontWeight: 500,
  width: "75%",
};

const PortofolioView = () => {
  const navigate = useNavigate(-1);
  const { id } = useParams();
  const { getPortofolioById, data } = usePortofolioById();

  const [themeContent, setThemeContent] = useState(null);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    getPortofolioById(id);
  }, []);

  useEffect(() => {
    if (data) {
      console.log({ data });
      setThemeContent(JSON.parse(data.jsonTheme).themeContent);
      setTheme(JSON.parse(data.jsonTheme).themeType);
    }
  }, [data]);

  return themeContent ? (
    <>
      {theme === "aperture" ? (
        <ApartureTheme themeContent={themeContent} setEditeblePath={() => {}} />
      ) : theme === "aspect" ? (
        <AspectTheme themeContent={themeContent} setEditeblePath={() => {}} />
      ) : (
        <DraytonTheme themeContent={themeContent} setEditeblePath={() => {}} />
      )}
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
        sx={editSectionStyles}
      >
        <Button
          onClick={() => {navigate(-1)}}
          sx={{ ...buttonStyles, background: "#FFFFFF" }}
          startIcon={<ArrowBackIcon sx={{ width: "2rem", height: "100%" }} />}
          variant="contained"
        >
          <Typography style={ButtonTextStyles}>Go Back</Typography>
        </Button>
      </Stack>
    </>
  ) : (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <CircularProgress size={"8rem"} />
    </Box>
  );
};

export default PortofolioView;
