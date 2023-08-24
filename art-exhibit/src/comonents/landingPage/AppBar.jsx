import React, { useEffect, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import AuthenticationDialog from "./AuthenticationDialog";
import { useArtContext } from "../../state/AppContext";
import { Avatar } from "@mui/material";
import NotificationToaster from "./NotificationToaster";

const logoTitleStyles = {
  display: { xs: "none", md: "flex" },
  fontWeight: 700,
  fontFamily: "Poppins, sans-serif",
  fontSize: "25px",
  lineHeight: "50px",
  textDecoration: "none",
  color: "#C882FF",
};

const menuOptionsStyles = {
  textDecoration: "none",
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "50px",
};

const buttonStyles = {
  backgroundColor: "#C786FF",
  color: "black",
  borderRadius: "50px",
  padding: "10px 20px",
  textTransform: "none",
  height: "100%",
};

const navBarStyles = {
  boxShadow: 0,
  backgroundColor: "rgba(245,233,255, 0.7)",
  backdropFilter: " blur( 10px )",
  position: "fixed",
  width: "100%",
  zIndex: 10,
};

const AppBarMenu = () => {
  const [logedIn, setLogedIn] = useState(false);

  const {
    profilePicture,
    username,
    authToken,
    setAuthDialogOpen,
    authError,
    setAuthError,
  } = useArtContext();

  const { scrollY } = useScroll();

  const appBarControls = useAnimation();
  const contentControls = useAnimation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 100) {
      appBarControls.start("middle");
      contentControls.start("middle");
    } else {
      appBarControls.start("top");
      contentControls.start("top");
    }
  });

  useEffect(() => {
    if (profilePicture && username && authToken) {
      setLogedIn(true);
    }
  }, [profilePicture, username, authToken]);

  const handleClickOpen = () => {
    setAuthDialogOpen(true);
  };

  useEffect(() => {
    console.log(authError);
  }, [authError])

  const removeNotification = () => {
    setAuthError(null);
  };
  return (
    <>
      {authError && (
        <AnimatePresence>
        <NotificationToaster
          removeNotif={removeNotification}
          key={Date.now()}
          text={authError}
        />
        </AnimatePresence>
      )}
      <Stack direction={"row"} justifyContent={"center"} sx={{ mt: 2 }}>
        <motion.nav
          style={navBarStyles}
          variants={{
            top: { width: "100%", borderRadius: 0, margin: 0, border: "none" },
            middle: {
              width: "60%",
              borderRadius: "50px",
              margin: "0 auto",
              border: "1px solid rgba(255, 255, 255, 0.8)",
            },
          }}
          initial="top"
          animate={appBarControls}
          transition={{ duration: 0.5 }}
        >
          <Toolbar>
            <motion.div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "83%",
                alignItems: "center",
              }}
              variants={{
                top: { width: "83%", padding: "1rem 6.5rem", margin: 0 },
                middle: {
                  width: "100%",
                  padding: "1rem 0.5rem",
                  margin: "0 auto",
                },
              }}
              initial="top"
              animate={contentControls}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={logoTitleStyles}
              >
                ArtExhibit
              </Typography>
              <Stack direction={"row"} spacing={6}>
                <Typography component="a" href="/" sx={menuOptionsStyles}>
                  Artists
                </Typography>
                <Typography component="a" href="/" sx={menuOptionsStyles}>
                  Category
                </Typography>
                <Typography component="a" href="/" sx={menuOptionsStyles}>
                  Community
                </Typography>
                <Typography component="a" href="/" sx={menuOptionsStyles}>
                  Portofolio
                </Typography>
              </Stack>
              <AnimatePresence mode="wait">
                {logedIn ? (
                  <motion.div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "17%",
                      borderRadius: "50px",
                      boxShadow:
                        "0px 0px 73px 20px rgba(199,134,255,0.57) inset",
                    }}
                    key="logedIn"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Typography
                      style={{ ...menuOptionsStyles, marginLeft: "10%" }}
                    >
                      {username}
                    </Typography>
                    <Avatar
                      sx={{
                        bgcolor: "#C786FF",
                        width: 56,
                        height: 56,
                        cursor: "pointer",
                      }}
                    >
                      {profilePicture.length < 100 ? (
                        username.charAt(0)
                      ) : (
                        <img
                          style={{ objectFit: "cover", width: 56, height: 56 }}
                          src={profilePicture}
                        />
                      )}
                    </Avatar>
                  </motion.div>
                ) : (
                  <motion.div
                    key="logedOut"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button style={buttonStyles} onClick={handleClickOpen}>
                      <Typography
                        sx={{ ...menuOptionsStyles, lineHeight: "20px" }}
                      >
                        Log In
                      </Typography>
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </Toolbar>
        </motion.nav>
      </Stack>
      <AuthenticationDialog />
    </>
  );
};
export default AppBarMenu;
