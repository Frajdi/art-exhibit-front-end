import React, { forwardRef, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import TextReveal from "../../animationUtils/TextReveal";
import Avatar from "@mui/material/Avatar";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { motion, useAnimation } from "framer-motion";

const dialogStyles = {
  "& .MuiDialog-paper": {
    backgroundColor: "rgba(245,233,255, 0.6)",
    border: "1px solid rgba(255, 255, 255, 0.8)",
    backdropFilter: " blur( 10px )",
    borderRadius: "70px",
    width: "912px",
    padding: "1.5rem 3rem",
    overflow: "hidden",
  },
};

const buttonStyles = {
  backgroundColor: "#C786FF",
  color: "black",
  borderRadius: "50px",
  padding: "10px 20px",
  textTransform: "none",
};

const buttonTextStyles = {
  textDecoration: "none",
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "20px",
};

const headerStyles = {
  ...buttonTextStyles,
  color: "black",
  fontSize: "25px",
};

const contentStyles = { overflow: "hidden" };

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AuthenticationDialog = ({ open, setOpen }) => {
  const [replay, setReplay] = useState(true);
  const [signIn, setSignIn] = useState(true);
  const [profilePictureHovered, setProfilePictureHovered] = useState(false);

  const signUpButtonGroupControls = useAnimation();
  const signInButtonGroupControls = useAnimation();
  const confirmPasswordControl = useAnimation();

  const handleReplay = () => {
    setReplay(!replay);
    if (signIn) {
      signUpButtonGroupControls.start("hidden");
      signInButtonGroupControls.start("visible");
      confirmPasswordControl.start("visible");
    } else {
      confirmPasswordControl.start("hidden");
      signUpButtonGroupControls.start("visible");
      signInButtonGroupControls.start("hidden");
    }
    setTimeout(() => {
      setSignIn((prev) => !prev);
      setReplay(true);
    }, 600);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={dialogStyles}
      >
        <motion.div
          className="App"
          initial="hidden"
          animate={replay ? "visible" : "hidden"}
          variants={container}
        >
          <DialogTitle>
            <TextReveal
              text={signIn ? "Log In" : "Sign Up"}
              style={headerStyles}
            />
          </DialogTitle>
        </motion.div>
        <DialogContent sx={{ overflow: "hidden" }}>
          <Stack direction="column" spacing={2} style={contentStyles}>
            <motion.div
              style={{ width: 56 }}
              onMouseEnter={() => setProfilePictureHovered(true)}
              onMouseLeave={() => setProfilePictureHovered(false)}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={"hidden"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
              <Avatar
                sx={{
                  bgcolor: "#C786FF",
                  width: 56,
                  height: 56,
                  cursor: "pointer",
                }}
              >
                {profilePictureHovered ? (
                  <FileUploadIcon />
                ) : (
                  <PersonAddAltIcon />
                )}
              </Avatar>
            </motion.div>
            <TextField variant="standard" label="User Name" />
            <TextField variant="standard" label="Password" type="password" />
            <motion.div
              style={{ width: "100%" }}
              variants={{
                hidden: { height: 0 },
                visible: { height: "100%" },
              }}
              initial={"hidden"}
              animate={confirmPasswordControl}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                style={{ width: "100%" }}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={"hidden"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <TextField
                  fullWidth
                  variant="standard"
                  label="Confirm Password"
                  type="password"
                />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={"hidden"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <TextField fullWidth variant="standard" label="Date of birth" />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={"hidden"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <TextField fullWidth variant="standard" label="Phone number" />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={"hidden"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                <TextField fullWidth variant="standard" label="Email" />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={"hidden"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                <TextField fullWidth variant="standard" label="Country" />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={"hidden"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              >
                <TextField
                  fullWidth
                  variant="standard"
                  label="Choose category"
                />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={"hidden"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              >
                <TextField
                  fullWidth
                  variant="standard"
                  label="Are you a student ?"
                />
              </motion.div>
            </motion.div>
          </Stack>
        </DialogContent>
        <motion.div
          variants={{
            hidden: { x: "150%", display: "none" },
            visible: { x: 0, display: "inline-block" },
          }}
          initial="visible"
          animate={signUpButtonGroupControls}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Stack
            direction={"row"}
            sx={{ m: 3 }}
            spacing={2}
            alignItems={"center"}
          >
            <Button style={buttonStyles} onClick={handleClose}>
              <Typography style={buttonTextStyles}>Log In</Typography>
            </Button>
            <Typography style={buttonTextStyles}>
              Don't have an account
              <span
                style={{
                  ...buttonTextStyles,
                  color: "#1e12e0",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
                onClick={() => handleReplay()}
              >
                {" "}
                Sign Up
              </span>
            </Typography>
          </Stack>
        </motion.div>
        <motion.div
          variants={{
            hidden: { x: "-150%", display: "none" },
            visible: { x: 0, display: "inline-block" },
          }}
          initial="hidden"
          animate={signInButtonGroupControls}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Stack
            direction={"row"}
            sx={{ m: 3 }}
            spacing={2}
            alignItems={"center"}
          >
            <Button style={buttonStyles} onClick={handleClose}>
              <Typography style={buttonTextStyles}>Sign Up</Typography>
            </Button>
            <Typography style={buttonTextStyles}>
              Already have an account
              <span
                style={{
                  ...buttonTextStyles,
                  color: "#1e12e0",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
                onClick={() => handleReplay()}
              >
                {" "}
                Log In
              </span>
            </Typography>
          </Stack>
        </motion.div>
      </Dialog>
    </div>
  );
};

export default AuthenticationDialog;
