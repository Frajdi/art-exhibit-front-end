import React, { forwardRef, useEffect, useState } from "react";
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
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { motion, useAnimation } from "framer-motion";
import useAuthenticate from "../../commands/authentication";
import { useArtContext } from "../../state/AppContext";

const dialogStyles = {
  "& .MuiDialog-paper": {
    backgroundColor: "rgba(245,233,255, 0.6)",
    border: "1px solid rgba(255, 255, 255, 0.8)",
    backdropFilter: " blur( 10px )",
    borderRadius: "70px",
    width: "912px",
    padding: "2rem 3rem",
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

const AuthenticationDialog = () => {
  const {
    setProfilePicture,
    setUsername,
    setAuthToken,
    authDialogOpen,
    setAuthDialogOpen,
    isLogIn,
  } = useArtContext();

  //   UI States
  const [replay, setReplay] = useState(true);
  const [signIn, setSignIn] = useState(isLogIn);
  const [profilePictureHovered, setProfilePictureHovered] = useState(false);

  

  //   Data States
  const [signUpData, setSignUpData] = useState({
    address: "",
    category: "",
    student: "",
    email: "",
    files: [{}],
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
    profileImage: "",
    username: "",
  });

  const [signInData, setSignInData] = useState({
    password: "",
    username: "",
  });

  //custom hooks for authentication

  const { data, error, isLoading, postRequest } = useAuthenticate(
    signIn ? "login" : "signup"
  );

  //hooks for animation

  const signUpButtonGroupControls = useAnimation();
  const signInButtonGroupControls = useAnimation();
  const confirmPasswordControl = useAnimation();

  useEffect(() => {
    const accessToken = data?.access_token;
    if (accessToken) {
      setProfilePicture(`data:image/png;base64,${data.profileImage}`);
      setUsername(data.username);
      setAuthToken(accessToken);
    }
  }, [data]);

  const handleAvatarClick = () => {
    // Trigger the hidden file input when the avatar is clicked
    document.getElementById("fileInput").click();
  };

  const handleChange = (field) => (e) => {
    if (signIn) {
      setSignInData((prev) => {
        const newData = { ...prev };
        newData[field] = e.target.value;
        return newData;
      });
    } else {
      if (field === "profileImage") {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            // The result contains the base64 representation of the image
            setSignUpData((prev) => {
              const newData = { ...prev };
              const fullBase64img = reader.result;
              const base64Image = fullBase64img.split(",")[1];
              newData[field] = base64Image;
              return newData;
            });
          };
        }
      } else {
        setSignUpData((prev) => {
          const newData = { ...prev };
          newData[field] = e.target.value;
          return newData;
        });
      }
    }
  };

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

  useEffect(() => {
    handleReplay()
  },[isLogIn])

  const handleClose = () => {
    setAuthDialogOpen(false);
  };

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  useEffect(() => handleReplay(), []);

  return (
    <div>
      <Dialog
        open={authDialogOpen}
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
          <DialogTitle sx={{ p: 0 }}>
            <TextReveal
              text={
                signIn
                  ? "Welcome Back To ArtExhibit"
                  : "Get Started Set Up Your Account"
              }
              style={headerStyles}
            />
          </DialogTitle>
        </motion.div>
        <DialogContent sx={{ overflow: "hidden", p: 0 }}>
          <Stack direction="column" spacing={2} style={contentStyles}>
            <motion.div
              style={{ width: 56 }}
              onMouseEnter={() => setProfilePictureHovered(true)}
              onMouseLeave={() => setProfilePictureHovered(false)}
              variants={{
                hidden: { height: 0, x: "-100%" },
                visible: { height: "50px", x: 0 },
              }}
              initial={signIn ? "hidden" : "visible"}
              animate={confirmPasswordControl}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleChange("profileImage")}
                style={{ display: "none" }}
                id="fileInput"
              />
              <Avatar
                sx={{
                  bgcolor: "#C786FF",
                  width: 56,
                  height: 56,
                  cursor: "pointer",
                }}
                onClick={handleAvatarClick}
                onMouseEnter={() => setProfilePictureHovered(true)}
                onMouseLeave={() => setProfilePictureHovered(false)}
              >
                {profilePictureHovered ? (
                  <FileUploadIcon />
                ) : signUpData.profileImage ? (
                  <img
                    style={{ objectFit: "cover", width: 56, height: 56 }}
                    src={`data:image/png;base64,${signUpData.profileImage}`}
                  />
                ) : (
                  <PersonAddAltIcon />
                )}
              </Avatar>
            </motion.div>
            <TextField
              variant="standard"
              label="User Name"
              onChange={handleChange("username")}
              value={signIn ? signInData.username : signUpData.username}
            />
            <TextField
              variant="standard"
              label="Password"
              type="password"
              onChange={handleChange("password")}
              value={signIn ? signInData.password : signUpData.password}
            />
            <motion.div
              style={{ width: "100%" }}
              variants={{
                hidden: { height: 0 },
                visible: { height: "100%" },
              }}
              initial={signIn ? "hidden" : "visible"}
              animate={confirmPasswordControl}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                style={{ width: "100%" }}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={signIn ? "hidden" : "visible"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <TextField
                  onChange={handleChange("firstName")}
                  value={signUpData.firstName}
                  fullWidth
                  variant="standard"
                  label="First Name"
                />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={signIn ? "hidden" : "visible"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <TextField
                  onChange={handleChange("lastName")}
                  value={signUpData.lastName}
                  fullWidth
                  variant="standard"
                  label="Last Name"
                />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={signIn ? "hidden" : "visible"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <TextField
                  onChange={handleChange("phoneNumber")}
                  value={signUpData.phoneNumber}
                  fullWidth
                  variant="standard"
                  label="Phone number"
                />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={signIn ? "hidden" : "visible"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                <TextField
                  onChange={handleChange("email")}
                  value={signUpData.email}
                  fullWidth
                  variant="standard"
                  label="Email"
                />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={signIn ? "hidden" : "visible"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                <TextField
                  onChange={handleChange("address")}
                  value={signUpData.address}
                  fullWidth
                  variant="standard"
                  label="Country"
                />
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={signIn ? "hidden" : "visible"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              >
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Choose category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    onChange={handleChange("category")}
                    value={signUpData.category}
                    label="Choose category"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"MUSICIAN"}>Musician</MenuItem>
                    <MenuItem value={"DESIGNER"}>Designer</MenuItem>
                    <MenuItem value={"PAINTING"}>Painting</MenuItem>
                    <MenuItem value={"ARCHITECTURE"}>Architecture</MenuItem>
                    <MenuItem value={"DRAWING"}>Drawing</MenuItem>
                    <MenuItem value={"PHOTOGRAPHY"}>Photography</MenuItem>
                    <MenuItem value={"DANCE"}>Dance</MenuItem>
                    <MenuItem value={"SCULPTURE"}>Sculpture</MenuItem>
                  </Select>
                </FormControl>
              </motion.div>
              <motion.div
                style={{ width: "100%" }}
                variants={{
                  hidden: { height: 0, x: "-100%" },
                  visible: { height: "50px", x: 0 },
                }}
                initial={signIn ? "hidden" : "visible"}
                animate={confirmPasswordControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              >
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Are you a student ?
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    onChange={handleChange("student")}
                    value={signUpData.student}
                    label="Are you a student ?"
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                </FormControl>
              </motion.div>
            </motion.div>
          </Stack>
        </DialogContent>
        <motion.div
          variants={{
            hidden: { x: "150%", display: "none" },
            visible: { x: 0, display: "inline-block" },
          }}
          initial={signIn ? "visible" : "hidden"}
          animate={signUpButtonGroupControls}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Stack
            direction={"row"}
            sx={{ mt: 3, p: 0 }}
            spacing={2}
            alignItems={"center"}
          >
            <Button
              style={buttonStyles}
              onClick={() => {
                postRequest(signInData);
                handleClose();
              }}
            >
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
          initial={signIn ? "hidden" : "visible"}
          animate={signInButtonGroupControls}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Stack
            direction={"row"}
            sx={{ mt: 3, p: 0 }}
            spacing={2}
            alignItems={"center"}
          >
            <Button
              style={buttonStyles}
              onClick={() => {
                postRequest(signUpData);
                handleReplay();
              }}
            >
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
