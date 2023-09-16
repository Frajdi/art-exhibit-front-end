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
import { AnimatePresence, motion, useAnimation } from "framer-motion";
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

const contentStyles = {
  // overflowY: "scroll",
};

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AuthenticationDialog = () => {
  const {
    setProfilePicture,
    setUsername,
    setCategory,
    setAuthToken,
    setAuthLoading,
    setAuthError,
    isLogIn,
    setIsLogIn,
  } = useArtContext();

  //   UI States
  // const [isLogIn, setIsLogIn] = useState(isLogIn);
  const [profilePictureHovered, setProfilePictureHovered] = useState(false);

  //   Data States
  const [signUpData, setSignUpData] = useState({
    address: "",
    category: "",
    birthOfDate: "",
    email: "",
    files: [{}],
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
    profileImage: "",
    username: "",
  });

  const [isLogInData, setIsLogInData] = useState({
    password: "",
    username: "",
  });

  //custom hooks for authentication

  const { data, error, isLoading, postRequest } = useAuthenticate(
    isLogIn ? "login" : "signup"
  );

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    postRequest(isLogInData);
    handleClose();
  };

  const handleSignUp = () => {
    postRequest(signUpData);
    setIsLogIn(true);
  };

  useEffect(() => {
    if (isLoading === false && error) {
      setAuthError(error);
      setIsLogIn(null);
    }
  }, [isLoading]);

  useEffect(() => {
    const accessToken = data?.access_token;
    if (accessToken) {
      setProfilePicture(`data:image/png;base64,${data.profileImage}`);
      setAuthLoading(isLoading);
      setUsername(data.username);
      setCategory(data.category);
      setAuthToken(accessToken);
    }
  }, [data]);

  useEffect(() => {
    setErrors({ username: "", password: "" });
    if (!isLogIn) {
      dialogHeightControls.start("signUp");
    } else {
      dialogHeightControls.start("isLogIn");
    }
    titleControl.start("hidden");
    setTimeout(() => {
      titleControl.start("visible");
    }, 600);
  }, [isLogIn, isLogIn]);

  //hooks for animation

  const titleControl = useAnimation();
  const dialogHeightControls = useAnimation();

  const handleAvatarClick = () => {
    // Trigger the hidden file input when the avatar is clicked
    document.getElementById("fileInput").click();
  };

  const handleChange = (field) => (e) => {
    if (isLogIn) {
      setIsLogInData((prev) => {
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

  const handleClose = () => {
    setIsLogIn(null);
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
        open={isLogIn !== null}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={dialogStyles}
      >
        <motion.div
          className="App"
          initial="hidden"
          animate={titleControl}
          variants={container}
        >
          <DialogTitle sx={{ p: 0 }}>
            <TextReveal
              text={
                isLogIn
                  ? "Welcome Back To ArtExhibit"
                  : "Set Up Your Account"
              }
              style={headerStyles}
            />
          </DialogTitle>
        </motion.div>
        <DialogContent sx={{ overflow: "scrooll", pt: 5 }}>
          <AnimatePresence mode="wait" initial={false}>
            <Stack
              direction="column"
              spacing={5}
              style={contentStyles}
              component={motion.div}
              layout
              variants={{
                signUp: { height: "80vh" },
                isLogIn: { height: "17vh" },
              }}
              initial={"signUp"}
              animate={dialogHeightControls}
              transition={{ duration: 0.3 }}
              justifyContent="flex-start"
            >
              {!isLogIn && (
                <motion.div
                  layout
                  key={0}
                  style={{ width: 56 }}
                  onMouseEnter={() => setProfilePictureHovered(true)}
                  onMouseLeave={() => setProfilePictureHovered(false)}
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
              )}

              <TextField
                helperText={errors.username}
                error={Boolean(errors.username)}
                style={{ width: "100%", height: "10px", marginTop: "10px" }}
                key={1}
                variant="standard"
                label="User Name"
                onChange={handleChange("username")}
                value={isLogIn ? isLogInData.username : signUpData.username}
              />
              {!isLogIn && (
                <motion.div
                  layout
                  key={3}
                  style={{ width: "100%", height: "10px" }}
                >
                  <TextField
                    helperText={errors.firstName}
                    error={Boolean(errors.firstName)}
                    onChange={handleChange("firstName")}
                    value={signUpData.firstName}
                    fullWidth
                    variant="standard"
                    label="First Name"
                  />
                </motion.div>
              )}

              {!isLogIn && (
                <motion.div
                  layout
                  key={4}
                  style={{ width: "100%", height: "10px" }}
                >
                  <TextField
                    helperText={errors.lastName}
                    error={Boolean(errors.lastName)}
                    onChange={handleChange("lastName")}
                    value={signUpData.lastName}
                    fullWidth
                    variant="standard"
                    label="Last Name"
                  />
                </motion.div>
              )}

              {!isLogIn && (
                <motion.div
                  layout
                  key={5}
                  style={{ width: "100%", height: "10px" }}
                >
                  <TextField
                    helperText={errors.phoneNumber}
                    error={Boolean(errors.phoneNumber)}
                    onChange={handleChange("phoneNumber")}
                    value={signUpData.phoneNumber}
                    fullWidth
                    variant="standard"
                    label="Phone number"
                  />
                </motion.div>
              )}

              {!isLogIn && (
                <motion.div
                  layout
                  key={6}
                  style={{ width: "100%", height: "10px" }}
                >
                  <TextField
                    helperText={errors.email}
                    error={Boolean(errors.email)}
                    onChange={handleChange("email")}
                    value={signUpData.email}
                    fullWidth
                    variant="standard"
                    label="Email"
                  />
                </motion.div>
              )}

              {!isLogIn && (
                <motion.div
                  layout
                  key={7}
                  style={{ width: "100%", height: "10px" }}
                >
                  <TextField
                    helperText={errors.address}
                    error={Boolean(errors.address)}
                    onChange={handleChange("address")}
                    value={signUpData.address}
                    fullWidth
                    variant="standard"
                    label="Country"
                  />
                </motion.div>
              )}

              {!isLogIn && (
                <motion.div
                  layout
                  key={8}
                  style={{ width: "100%", height: "10px" }}
                >
                  <FormControl variant="standard" sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Choose category
                    </InputLabel>
                    <Select
                      helperText={errors.category}
                      error={Boolean(errors.category)}
                      id="demo-simple-select-standard"
                      onChange={handleChange("category")}
                      value={signUpData.category}
                      label="Choose category"
                    >
                      <MenuItem value={"ART_COLLECTOR"}>Art Collector</MenuItem>
                      <MenuItem value={"ARCHITECTURE"}>Architecture</MenuItem>
                      <MenuItem value={"CALLIGRAPHY"}>Calligraphy</MenuItem>
                      <MenuItem value={"CINEMATOGRAPHY"}>
                        Cinematography
                      </MenuItem>
                      <MenuItem value={"DANCE"}>Dance</MenuItem>
                      <MenuItem value={"DESIGNER"}>Designer</MenuItem>
                      <MenuItem value={"DRAWING"}>Drawing</MenuItem>
                      <MenuItem value={"FILM"}>Film</MenuItem>
                      <MenuItem value={"MUSIC"}>Music</MenuItem>
                      <MenuItem value={"PAINTING"}>Painting</MenuItem>
                      <MenuItem value={"PHOTOGRAPHY"}>Photography</MenuItem>
                      <MenuItem value={"SCULPTURE"}>Sculpture</MenuItem>
                      <MenuItem value={"PERFORMING"}>Performing</MenuItem>
                      <MenuItem value={"ARTS"}>Arts</MenuItem>
                      <MenuItem value={"POTTERY"}>Pottery</MenuItem>
                      <MenuItem value={"PRINTMAKING"}>Printmaking</MenuItem>
                      <MenuItem value={"WRITING"}>Writing</MenuItem>
                    </Select>
                  </FormControl>
                </motion.div>
              )}

              {!isLogIn && (
                <motion.div
                  layout
                  key={9}
                  style={{ width: "100%", height: "10px" }}
                >
                  <TextField
                    helperText={errors.birthOfDate}
                    error={Boolean(errors.birthOfDate)}
                    style={{ width: "100%", height: "10px" }}
                    variant="standard"
                    id="demo-simple-select-standard"
                    onChange={handleChange("birthOfDate")}
                    value={signUpData.birthOfDate}
                    label="Date Of Birth"
                    type="date"
                    InputLabelProps={{
                      style: {
                        marginLeft: "7rem", // Adjust the value as needed
                      },
                    }}
                  />
                  <TextField
                    helperText={errors.password}
                    error={Boolean(errors.password)}
                    style={{ width: "100%", height: "10px", marginTop: '2rem' }}
                    key={2}
                    variant="standard"
                    label="Password"
                    type="password"
                    onChange={handleChange("password")}
                    value={isLogIn ? isLogInData.password : signUpData.password}
                  />
                </motion.div>
              )}
            </Stack>
          </AnimatePresence>
        </DialogContent>
        <AnimatePresence mode="wait" initial={false}>
          {isLogIn ? (
            <motion.div
              key={0}
              layout
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
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
                    handleLogin();
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
                    onClick={() => {
                      setIsLogIn(false);
                    }}
                  >
                    {" "}
                    Sign Up
                  </span>
                </Typography>
              </Stack>
            </motion.div>
          ) : (
            <motion.div
              key={1}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
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
                    handleSignUp();
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
                    onClick={() => {
                      setIsLogIn(true);
                    }}
                  >
                    {" "}
                    Log In
                  </span>
                </Typography>
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog>
    </div>
  );
};

export default AuthenticationDialog;
