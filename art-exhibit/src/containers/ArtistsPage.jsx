import React from "react";
import AppBarMenu from "../comonents/landingPage/AppBar";
import Grid from "@mui/material/Grid";

import { motion } from "framer-motion";
const ArtistsPage = () => {
  return (
    <motion.div
    style={{height: '100vh', width: '100vw'}}
      initial={{
        opacity: 0,
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      }}
      animate={{
        opacity: 1,
        clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      }}
      exit={{
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        // opacity: 0
      }}
      transition={{ duration: 2 }}
    >
      <Grid container sx={{ backgroundColor: "#F5E9FF" }}>
        <Grid item xs={12}>
          <AppBarMenu />
        </Grid>
        <Grid item xs={12}>
        <div>ARTISTSS</div>
        </Grid>
       
      </Grid>
    </motion.div>
  );
};

export default ArtistsPage;
