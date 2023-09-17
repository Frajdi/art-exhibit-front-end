import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import AppBarMenu from "../comonents/landingPage/AppBar";
import { useArtContext } from "../state/AppContext";
import useGetMyPortofolio from "../commands/getMyPortofolio";
import ApartureTheme from "../comonents/portofolioCreatePage/ApartureTheme";
import AspectTheme from "../comonents/portofolioCreatePage/AspectTheme";
import DraytonTheme from "../comonents/portofolioCreatePage/DraytonTheme";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Footer from "../comonents/landingPage/Footer";

const buttonStyles = {
  width: "320px",
  height: "70px",
  borderRadius: "120px",
};

const buttonTextStyles = {
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "36px",
  textTransform: "none",
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
};

const PortofolioPage = () => {
  const navigate = useNavigate();
  const { authToken } = useArtContext();
  const { getMyPortofolio, data, isLoading, error } = useGetMyPortofolio();
  const [currentPortofolio, setCurrentPortofolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      getMyPortofolio(authToken);
  }, [authToken]);

  useEffect(() => {
    if (data === false) {
      setCurrentPortofolio(false);
      setLoading(false)
    }
    if (data) {
      setCurrentPortofolio(JSON.parse(data.jsonTheme));
      setLoading(false)
    }
    if(error !== null){
      setLoading(false)
    }
  }, [data, error]);

  if (loading) {
    return (
      <Grid
        container
        sx={{ backgroundColor: "#FFFFFF" }}
        height={currentPortofolio ? "100%" : "100vh"}
      >
        <Grid item xs={12}>
          <AppBarMenu color="#FFFFFF" />
        </Grid>
        <Grid item xs={12} padding={"8rem 2rem 0 2rem"} height={"100vh"}>
          <Stack
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box sx={{ display: "flex" }}>
              <CircularProgress size={"8rem"} />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid
      container
      sx={{ backgroundColor: "#FFFFFF" }}
      height={currentPortofolio ? "100%" : "100vh"}
    >
      <Grid item xs={12}>
        <AppBarMenu color="#FFFFFF" />
      </Grid>
      {currentPortofolio !== null ? (
        <Grid item xs={12} padding={"8rem 2rem 0 2rem"} height={"100%"}>
          <Paper
            elevation={15}
            sx={{ mt: 10, borderRadius: "30px", p: "1rem 0" }}
          >
            <Stack alignItems={"center"} sx={{ m: 5 }}>
              <Button
                style={{ ...buttonStyles, background: "#E7DEEF" }}
                variant="contained"
                onClick={() => {
                  navigate("/portofolio-edit");
                }}
              >
                <Typography style={{ ...buttonTextStyles, color: "#222222" }}>
                  Edit Portofolio
                </Typography>
              </Button>
            </Stack>
            {currentPortofolio.themeType === "aperture" ? (
              <ApartureTheme
                themeContent={currentPortofolio.themeContent}
                setEditeblePath={() => {}}
                fontFamily={currentPortofolio.fontFamily}
              />
            ) : currentPortofolio.themeType === "aspect" ? (
              <AspectTheme
                themeContent={currentPortofolio.themeContent}
                setEditeblePath={() => {}}
                fontFamily={currentPortofolio.fontFamily}
              />
            ) : (
              <DraytonTheme
                themeContent={currentPortofolio.themeContent}
                setEditeblePath={() => {}}
                fontFamily={currentPortofolio.fontFamily}
              />
            )}
          </Paper>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Stack alignItems={"center"} justifyContent={'center'} height={'100%'} sx={{m: '4rem 8rem', borderRadius: '300px'}} component={Paper} elevation={5}>
            <Button
              style={{ ...buttonStyles, background: "#7324E8" }}
              variant="contained"
              onClick={() => {
                navigate("/portofolio-theme-pick");
              }}
            >
              <Typography style={{ ...buttonTextStyles, color: "#FFFFFF" }}>
                Create Portofolio
              </Typography>
            </Button>
          </Stack>
        </Grid>
      )}
      <Grid item xs={12} padding={"8rem 8rem 0 8rem"}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default PortofolioPage;
