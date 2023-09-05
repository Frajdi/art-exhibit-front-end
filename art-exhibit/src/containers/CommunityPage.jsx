import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AppBarMenu from "../comonents/landingPage/AppBar";
import Footer from "../comonents/landingPage/Footer";
import TextAnimation from "../animationUtils/TextAnimation";
import TitleGroup from "../comonents/communityPage/TitleGroup";
import EventSlider from "../comonents/communityPage/EventSlider";
import AllEvents from "../comonents/communityPage/AllEvents";
import { AnimatePresence, motion } from "framer-motion";
import CreateEventPopUp from "../comonents/communityPage/createEvent/CreateEventPopUp";
import TopNotifications from "../comonents/communityPage/notification/TopNotifications";

const signitureStyles = {
  textDecoration: "none",
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "30px",
  opacity: 0.5,
};

const signitureNameStyles = {
  ...signitureStyles,
  opacity: 1,
};

const wrapperVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    transition: { duration: 0.4 },
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
  exit: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    transition: { duration: 0.4 },
  },
};

const CommunityPage = () => {
  const [createEventDialogOpen, setCreateEventDialogOpen] = useState(false);
  const [seeAllEvents, setSeeAllEvents] = useState(false);
  return (
    <Grid container sx={{ backgroundColor: "#FFFFFF" }}>
      <AnimatePresence mode="wait">
        <Grid item xs={12} key={0}>
          <AppBarMenu color="#FFFFFF" />
        </Grid>
        {/* Initial Page */}
        {!seeAllEvents && (
          <>
          <motion.div
          variants={wrapperVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 3 , ease: 'easeLinear'}}
          key={1}
          >
            <Grid
              item
              xs={12}
              padding={"8rem 8rem 0 8rem"}
              sx={{ backgroundColor: "#FFFFFF" }}
            >
              <TitleGroup
                title={"Community"}
                seeAllText={"events"}
                seeAllFunction={() => setSeeAllEvents(true)}
                createNewText={"event"}
                createNewFunction={() => {setCreateEventDialogOpen(true)}}
              />
            </Grid>
            <Grid
              item
              xs={12}
              padding={"4rem 8rem 0 8rem"}
              sx={{ backgroundColor: "#FFFFFF" }}
            >
              <EventSlider />
            </Grid>
          </motion.div>
          <motion.div
          style={{width: '100%'}}
          variants={wrapperVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 3 , ease: 'easeLinear'}}
          key={2}
          >
            <Grid
              item
              xs={12}
              padding={"3rem 8rem 0 8rem"}
              sx={{ backgroundColor: "#FFFFFF" }}
            >
              <TitleGroup
                title={"Notifications"}
                seeAllText={"notifications"}
                seeAllFunction={() => {}}
                createNewText={"notification"}
                createNewFunction={() =>{}}
              />
            </Grid>
            <Grid
              item
              xs={12}
              padding={"4rem 8rem 0 8rem"}
              sx={{ backgroundColor: "#FFFFFF" }}
            >
              <TopNotifications />
            </Grid>
          </motion.div>
          </>
        )}
        {/* Event Page */}
        {seeAllEvents && 
        <Grid
          item
          xs={12}
          padding={"4rem 8rem 0 8rem"}
          sx={{ backgroundColor: "#FFFFFF" }}
          key={3}
          component={motion.div}
          variants={wrapperVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 3 , ease: 'easeLinear'}}
        >
          <AllEvents setSeeAllEvents={setSeeAllEvents}/>
        </Grid>
      }
        <Grid
          item
          xs={12}
          padding={"4rem 8rem 0 8rem"}
          sx={{ backgroundColor: "#FFFFFF" }}
          key={4}
        >
          <Footer />
        </Grid>
        <Grid
          item
          xs={12}
          padding={"3rem 8rem 4rem 8rem"}
          sx={{ backgroundColor: "#FFFFFF" }}
          key={5}
        >
          <Stack alignItems={"center"}>
            <TextAnimation color={"#c786ff"}>
              <Typography style={signitureStyles}>
                Created by{" "}
                <Typography component="span" style={signitureNameStyles}>
                  Denisa
                </Typography>{" "}
                | All Right Reserved!
              </Typography>
            </TextAnimation>
          </Stack>
        </Grid>
      </AnimatePresence>
      <CreateEventPopUp
        open={createEventDialogOpen}
        handleClose={() => {
          setCreateEventDialogOpen(false);
        }}
      />
    </Grid>
  );
};

export default CommunityPage;
