import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SendIcon from "@mui/icons-material/Send";
import AppBarMenu from "../comonents/landingPage/AppBar";
import Footer from "../comonents/landingPage/Footer";
import TextAnimation from "../animationUtils/TextAnimation";
import TitleGroup from "../comonents/communityPage/TitleGroup";
import EventSlider from "../comonents/communityPage/EventSlider";
import AllEvents from "../comonents/communityPage/AllEvents";
import { AnimatePresence, motion } from "framer-motion";
import CreateEventPopUp from "../comonents/communityPage/createEvent/CreateEventPopUp";
import TopNotifications from "../comonents/communityPage/notification/TopNotifications";
import useCreateNotification from "../commands/createNotification";
import { useArtContext } from "../state/AppContext";

const signitureStyles = {
  textDecoration: "none",
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "30px",
  opacity: 0.5,
};

const titleStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "40px",
  lineHeight: "60px",
};

const buttonStyles = {
  width: "320px",
  height: "70px",
  borderRadius: "120px",
};

const buttonTextStyles = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "36px",
  textTransform: "none",
};

const signitureNameStyles = {
  ...signitureStyles,
  opacity: 1,
};

const inputStyles = {
  border: "none",
  padding: "8px",
  borderRadius: "20px",
  boxShadow: "none",
  backgroundColor: "#F4F4F4",
  outline: "none",
  transition: "border-color 0.2s ease-in-out",
  "&:hover, &:focus": {
    borderColor: "#222222", // Change border color on hover/focus
  },
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
  const [seeAllNotifications, setSeeAllNotifications] = useState(false);
  const [createNotification, setCreateNotification] = useState(false);
  const [refetchNotifications, setRefetchNotifications] = useState(false)
  const [newNotification, setNewNotification] = useState({
    title: "",
    description: "",
  });
  const[notificationErrors, setNotificationErrors] = useState(false);
  const { createNotification: createNotificationCommand } =
    useCreateNotification();

    const {authToken} = useArtContext()



    const handleSubmitNewNotification = async() =>{
      if(newNotification.title !== '' && newNotification.description !== ''){
        await createNotificationCommand(newNotification, authToken)
        setRefetchNotifications(true)
        setCreateNotification(false)
      }else{
        setNotificationErrors(true)
      }
    }

  return (
    <Grid container sx={{ backgroundColor: "#FFFFFF" }}>
      <AnimatePresence>
        <Grid item xs={12} key={0}>
          <AppBarMenu color="#FFFFFF" />
        </Grid>
        {/* Initial Page */}
        {!seeAllEvents && (
          <>
            {!seeAllNotifications && (
              <motion.div
                style={{ width: "100%" }}
                variants={wrapperVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 3, ease: "easeLinear" }}
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
                    createNewFunction={() => {
                      setCreateEventDialogOpen(true);
                    }}
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
            )}

            <motion.div
              style={{ width: "100%" }}
              variants={wrapperVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 3, ease: "easeLinear" }}
              key={2}
            >
              <Grid
                item
                xs={12}
                padding={"3rem 8rem 0 8rem"}
                sx={{ backgroundColor: "#FFFFFF" }}
              >
                {!seeAllNotifications ? (
                  <>
                    <TitleGroup
                      title={"Notifications"}
                      seeAllText={"notifications"}
                      seeAllFunction={() => {
                        setSeeAllNotifications(true);
                      }}
                      createNewText={"notification"}
                      createNewFunction={() => {
                        setCreateNotification(true);
                      }}
                    />
                    {createNotification && (
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems={"center"}
                        sx={{ m: "5rem auto", mb: 0, width: "80%" }}
                      >
                        <TextField
                        onKeyDown={(e) => {if(e.key === 'Enter'){
                          handleSubmitNewNotification()
                        }}}
                          error={
                            notificationErrors && newNotification.title === ""
                          }
                          value={newNotification.title}
                          onChange={(e) => {
                            setNewNotification((prev) => {
                              return { ...prev, title: e.target.value };
                            });
                            setNotificationErrors(false)
                          }}
                          placeholder="Topic"
                          variant="outlined"
                          fullWidth
                          style={{ ...inputStyles, width: "35%" }}
                          InputProps={{
                            style: inputStyles,
                          }}
                        />
                        <TextField
                        onKeyDown={(e) => {if(e.key === 'Enter'){
                          handleSubmitNewNotification()
                        }}}
                          error={
                            notificationErrors &&
                            newNotification.description === ""
                          }
                          value={newNotification.description}
                          onChange={(e) => {
                            setNewNotification((prev) => {
                              return { ...prev, description: e.target.value };
                            });
                            setNotificationErrors(false)
                          }}
                          placeholder="Whats on your mind..."
                          variant="outlined"
                          fullWidth
                          style={{ ...inputStyles, width: "65%" }}
                          InputProps={{
                            style: inputStyles,
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                onClick={() => {handleSubmitNewNotification()}}
                                  color="primary"
                                  sx={{
                                    background: "#C786FF",
                                    color: "white",
                                    border: "2px solid #C786FF",
                                    borderRadius: "50%",
                                  }}
                                  aria-label="Send"
                                >
                                  <SendIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Stack>
                    )}
                  </>
                ) : (
                  <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={3}
                    width={"100%"}
                    marginTop={10}
                  >
                    <Typography style={titleStyles}>Notifications</Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                      spacing={8}
                    >
                      <Button
                        variant="contained"
                        startIcon={<KeyboardBackspaceIcon fontSize="80px" />}
                        onClick={() => {
                          setSeeAllNotifications(false);
                        }}
                        style={{ ...buttonStyles, background: "#7324E8" }}
                      >
                        <Typography
                          style={{ ...buttonTextStyles, color: "#FFFFFF" }}
                        >
                          Go Back
                        </Typography>
                      </Button>
                    </Stack>
                  </Stack>
                )}
              </Grid>
              <Grid
                item
                xs={12}
                padding={"4rem 8rem 0 8rem"}
                sx={{ backgroundColor: "#FFFFFF" }}
              >
                <TopNotifications  refetchNotifications={refetchNotifications} setRefetchNotifications={setRefetchNotifications}/>
              </Grid>
            </motion.div>
          </>
        )}
        {/* Event Page */}
        {seeAllEvents && (
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
            transition={{ duration: 3, ease: "easeLinear" }}
          >
            <AllEvents setSeeAllEvents={setSeeAllEvents} />
          </Grid>
        )}
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
