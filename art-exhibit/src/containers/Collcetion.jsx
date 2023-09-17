import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AppBarMenu from "../comonents/landingPage/AppBar";
import useGetCollections from "../commands/getCollections";
import { useNavigate } from "react-router-dom";
import { useArtContext } from "../state/AppContext";
import Footer from "../comonents/landingPage/Footer";
import { motion } from "framer-motion";

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
  const [collections, setCollections] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCollection(authToken);
  }, [authToken]);

  useEffect(() => {
    console.log({ data });
  }, [data]);

  useEffect(() => {
    if (data === false) {
      setCollections(false);
      setLoading(false);
    }
    if (data) {
      setCollections(data);
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
        height={collections ? "100%" : "100vh"}
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
      height={collections ? "100%" : "100vh"}
    >
      <Grid item xs={12}>
        <AppBarMenu color="#FFFFFF" />
      </Grid>
      {!collections ? (
        <Grid item xs={12} sx={{ p: "4rem 2rem" }}>
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
        <Grid item xs={12} sx={{p: "6rem 2rem"  }}>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
            width = {'87vw'}
            sx={{ m: "1rem 3rem", borderRadius: "20px", padding: '2rem 1rem' }}
            component={Paper}
            elevation={5}
            spacing={8}
          >
            {collections.map((collection) => {
              const portofolioContent = JSON.parse(
                collection.portfolio.jsonTheme
              );
              return (
                <Stack
                  direction={"column"}
                  component={Paper}
                  elevation={5}
                  sx={{ overflow: "hidden", borderRadius: '20px', width: '70%', backgroundColor: '#E09EFF', cursor: 'pointer' }}
                  justifyContent={"flex-end"}
                  onClick={() => {navigate(`/view/${collection.artist.username}/${collection.artist.id}`)}}
                >
                <Stack justifyContent={"center"} alignItems={'center'} height={'20%'} width={'100%'}>
                <Typography height={'20%'} style={{...buttonTextStyles, fontSize: '60px', color: 'white'}}>{collection.portfolio.name}</Typography>
                </Stack>
                  <motion.div whileHover={{height: '80%', marginTop: 0}} style={{height: '100%', marginTop: '-10rem', width: '100%', overflow: 'hidden', borderRadius: '20px'}}>
                    <img
                      style={{ height: "30rem", width: "100%", objectFit: 'cover' }}
                      src={`data:image/png;base64,${portofolioContent.themeContent.firstSection.img}`}
                    />
                  </motion.div>
                </Stack>
              );
            })}
          </Stack>
        </Grid>
      )}
      <Grid item xs={12} padding={"8rem 8rem 0 8rem"}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Collcetion;
