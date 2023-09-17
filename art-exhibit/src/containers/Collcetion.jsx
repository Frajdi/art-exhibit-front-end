import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AppBarMenu from "../comonents/landingPage/AppBar";
import useGetCollections from "../commands/getCollections";
import { useNavigate } from "react-router-dom";
import { useArtContext } from "../state/AppContext";
import Footer from "../comonents/landingPage/Footer";

const buttonTextStyles = {
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "36px",
  textTransform: "none",
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
};

const buttonStyles = {
  width: "320px",
  height: "70px",
  borderRadius: "120px",
};

const Collcetion = () => {
  const navigate = useNavigate();
  const { authToken } = useArtContext();
  const { getCollection, isLoading, data, error } = useGetCollections();
  const [currentPortofolio, setCurrentPortofolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCollection(authToken);
  }, [authToken]);

  useEffect(() => {
    if (data === false) {
      setCurrentPortofolio(false);
      setLoading(false);
    }
    if (data) {
      setCurrentPortofolio(JSON.parse(data.jsonTheme));
      setLoading(false);
    }
    if (error !== null) {
      setLoading(false);
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
      {currentPortofolio === null ? (
        <Grid item xs={12} sx={{p: '4rem 2rem'}}>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
            sx={{ m: "1rem 8rem", borderRadius: "300px" }}
            component={Paper}
            elevation={5}
            spacing={5}
          >
            <Typography style={{ ...buttonTextStyles, fontSize: "30px" }}>
              Your Collection Is Empty
            </Typography>
            <Button
              style={{ ...buttonStyles, background: "#E7DEEF" }}
              variant="contained"
              onClick={() => {
                navigate("/artists");
              }}
            >
              <Typography style={{ ...buttonTextStyles, color: "#222222" }}>
                Browse Artists
              </Typography>
            </Button>
          </Stack>
        </Grid>
      ) : (
        <Grid item sx={12}>
        {/* HERREEEEE SHOUUUULDDD GOOOO THEEEE COLLLLEEEECTIOOOONS */}

        </Grid>
      )}
      <Grid item xs={12} padding={"8rem 8rem 0 8rem"}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Collcetion;
