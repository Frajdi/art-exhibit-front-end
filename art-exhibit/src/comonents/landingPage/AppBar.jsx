import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import Avatar from "@mui/material/Avatar";
import NotificationToaster from "./NotificationToaster";
import Logo from "../../../assets/logo-02.png";
import { Menu, MenuItem } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const AppBarMenu = ({ color = "rgba(245,233,255, 0.7)" }) => {
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
    backgroundColor: color,
    backdropFilter: " blur( 10px )",
    position: "fixed",
    width: "100%",
    zIndex: 10,
    padding: "0.5rem 1rem",
  };

  const [logedIn, setLogedIn] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const location = useLocation();

  const {
    profilePicture,
    username,
    authToken,
    category,
    authError,
    setAuthError,
    setIsLogIn,
    logOut,
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            top: {
              width: "100%",
              borderRadius: 0,
              margin: 0,
              border: "none",
              backgroundColor: color,
            },
            middle: {
              width: "70%",
              borderRadius: "50px",
              margin: "0 auto",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              backgroundColor: "rgba(245,233,255, 0.7)",
            },
          }}
          initial="top"
          animate={appBarControls}
          transition={{ duration: 0.5 }}
        >
          <Stack direction="row" justifyContent={"center"} width={"100%"}>
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
              <Link style={{ textDecoration: "none" }} to={"/"}>
                <motion.div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50px",
                    width: "60px",
                    height: "60px",
                    overflow: "hidden",
                  }}
                  whileHover={{
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={Logo}
                    style={{
                      maxWidth: "250%",
                      maxHeight: "250%",
                      objectFit: "cover", // Crop the image to cover the container
                      objectPosition: "center center", // Center the image both horizontally and vertically
                    }}
                  />
                </motion.div>
              </Link>
              <Stack direction={"row"} spacing={6}>
                <Link
                  to={"/artists"}
                  style={{
                    textDecoration: "none",
                    boxShadow:
                      location.pathname === "/artists"
                        ? "0px 0px 73px 20px rgba(199,134,255,0.57) inset"
                        : "",
                    borderRadius: "50px",
                    padding: "0px 20px",
                  }}
                >
                  <Typography sx={menuOptionsStyles}>Artists</Typography>
                </Link>
                <Link
                  to={"/category"}
                  style={{
                    textDecoration: "none",
                    boxShadow:
                      location.pathname === "/category"
                        ? "0px 0px 73px 20px rgba(199,134,255,0.57) inset"
                        : "",
                    borderRadius: "50px",
                    padding: "0px 20px",
                  }}
                >
                  <Typography sx={menuOptionsStyles}>Category</Typography>
                </Link>
                <Link
                  to={"/community"}
                  style={{
                    textDecoration: "none",
                    boxShadow:
                      location.pathname === "/community"
                        ? "0px 0px 73px 20px rgba(199,134,255,0.57) inset"
                        : "",
                    borderRadius: "50px",
                    padding: "0px 20px",
                  }}
                >
                  <Typography sx={menuOptionsStyles}>Community</Typography>
                </Link>
                {category && (
                  <Link
                    to={category === "ART_COLLECTOR"
                        ? "/collection"
                        : "/portofolio"}
                    style={{
                      textDecoration: "none",
                      boxShadow:
                        location.pathname === "/portofolio" || location.pathname === "/collection"
                          ? "0px 0px 73px 20px rgba(199,134,255,0.57) inset"
                          : "",
                      borderRadius: "50px",
                      padding: "0px 20px",
                    }}
                  >
                    <Typography sx={menuOptionsStyles}>
                      {category === "ART_COLLECTOR"
                        ? "Collection"
                        : "Portfolio"}
                    </Typography>
                  </Link>
                )}
              </Stack>
              <AnimatePresence mode="wait">
                {logedIn ? (
                  <motion.div
                    style={{ width: "17%", borderRadius: "50px" }}
                    whileHover={{
                      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                      cursor: "pointer",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        borderRadius: "50px",
                        boxShadow:
                          "0px 0px 73px 20px rgba(199,134,255,0.57) inset",
                      }}
                      key="logedIn"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={handleClick}
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
                        {profilePicture && profilePicture.length < 100 ? (
                          username.charAt(0)
                        ) : (
                          <img
                            style={{
                              objectFit: "cover",
                              width: 56,
                              height: 56,
                            }}
                            src={profilePicture}
                          />
                        )}
                      </Avatar>
                    </motion.div>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      slotProps={{
                        paper: {
                          style: {
                            width: "14%",
                            borderRadius: "20px",
                            background: "rgba(245,233,255, 0.6)",
                            marginTop: "1rem",
                            boxShadow:
                              "0px 0px 73px 20px rgba(199,134,255,0.57) inset",
                            backdropFilter: " blur( 10px )",
                          },
                        },
                      }}
                    >
                      <Button
                        sx={{ color: "#222222" }}
                        fullWidth
                        disableFocusRipple
                        startIcon={<SettingsIcon />}
                        onClick={() => {
                          handleClose()
                          navigate("/settings");
                        }}
                      >
                        Settings
                      </Button>
                      <hr />
                      <Button
                        onClick={() => {
                          handleClose()
                          setLogedIn(false)
                          logOut();
                          navigate('/')
                        }}
                        sx={{ color: "#222222" }}
                        fullWidth
                        disableFocusRipple
                        startIcon={<LogoutIcon />}
                      >
                        Log Out
                      </Button>
                    </Menu>
                  </motion.div>
                ) : (
                  <motion.div
                    key="logedOut"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      style={buttonStyles}
                      onClick={() => {
                        setIsLogIn(true);
                      }}
                    >
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
          </Stack>
        </motion.nav>
      </Stack>
      <AuthenticationDialog />
    </>
  );
};
export default AppBarMenu;
