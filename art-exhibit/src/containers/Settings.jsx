import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import AppBarMenu from "../comonents/landingPage/AppBar";
import {
  Avatar,
  Button,
  Checkbox,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useArtContext } from "../state/AppContext";
import useGetCurrentUserData from "../commands/getCurrentUserData";
import Footer from "../comonents/landingPage/Footer";
import useUpdateSettings from "../commands/updateSettings";

const titleStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "40px",
  lineHeight: "60px",
};

const subtitleStyles = {
  ...titleStyles,
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "30px",
};

const buttonStyles = {
  width: "320px",
  height: "70px",
  borderRadius: "120px",
};

const buttonTextStyles = {
  ...titleStyles,
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "36px",
  textTransform: "none",
};

const profileImageStyles = {
  width: "99px",
  height: "99px",
  borderRadius: "100%",
  objectFit: "cover",
};

const generalSettingsStyles = {
  width: "170px",
  height: "50px",
  borderRadius: "5px",
  padding: "10px",
  gap: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "none",
};

const generalSettingsTextStyles = {
  ...buttonTextStyles,
  fontWeight: 400,
  fontSize: "15px",
  lineHeight: "18px",
  color: "#FFFFFF",
};

const fieldsStyles = {
  height: "30px",
  width: "374px",
  background: "#EDF2F9",
  border: "none",
  borderRadius: "5px",
  padding: "5px 20px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 400,
  fontSize: "14px",
};

const labelStyles = {
  padding: "5px 10px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 400,
  fontSize: "14px",
};

const Settings = () => {
  const [userData, setUserData] = useState(null);
  const [generalSettings, setGeneralSettings] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const { authToken, authLoading, setUsername, setProfilePicture } =
    useArtContext();
  const { isLoading, data, getRequest } = useGetCurrentUserData();
  const {
    isLoading: isUpdateLoading,
    error,
    updateSettings,
  } = useUpdateSettings();

  useEffect(() => {
    if (authToken) {
      getRequest(authToken);
    }
  }, [authToken]);

  useEffect(() => {
    if (data) {
      setUserData({
        firstName: data.firstName ? data.firstName : "",
        category: data.category ? data.category : "",
        lastName: data.lastName ? data.lastName : "",
        student: data.student ? data.student : "",
        email: data.email ? data.email : "",
        username: data.username ? data.username : "",
        description: data.description ? data.description : "",
        birthOfDate: data.birthOfDate ? data.birthOfDate : "",
        address: data.address ? data.address : "",
        phoneNumber: data.phoneNumber ? data.phoneNumber : "",
        profileImage: data.profileImage ? data.profileImage : "",
        password: data.password ? data.profileImage : "",
      });
    }
  }, [data]);

  const handleAvatarClick = () => {
    // Trigger the hidden file input when the avatar is clicked
    document.getElementById("fileInput").click();
  };

  if (isLoading || authLoading) return "Loading Content ...";

  return (
    <Grid container sx={{ backgroundColor: "#FFFFFF" }} height={"100%"}>
      <Grid item xs={12}>
        <AppBarMenu color="#FFFFFF" />
      </Grid>
      {!authToken || !userData ? (
        <Grid item xs={12} padding={"8rem 8rem 0 8rem"} height={"100%"}>
          <Stack
            direction="column"
            alignItems="center"
            spacing={10}
            height={"100%"}
            marginBottom={10}
          >
            <Stack direction="column" alignItems="center" spacing={3}>
              <Typography style={titleStyles}>Hello there</Typography>
              <Typography style={subtitleStyles}>
                You need to be loged in to edit account settings
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      ) : (
        <Grid item xs={12} padding={"8rem 8rem 0 8rem"} height={"100%"}>
          <Stack
            direction="column"
            alignItems="center"
            spacing={10}
            height={"100%"}
            marginBottom={10}
          >
            <Stack direction="column" alignItems="center" spacing={3}>
              <Typography style={titleStyles}>
                I'm {userData?.username}
              </Typography>
              <Typography style={subtitleStyles}>
                {userData.category === "ART_COLLECTOR"
                  ? "Art collector"
                  : "Art seller"}
              </Typography>
              {userData.category !== "ART_COLLECTOR" && (
                <Stack
                  direction="row"
                  spacing={5}
                  justifyContent="center"
                  alignItems="center"
                  height="80px"
                >
                  <Button
                    style={{ ...buttonStyles, background: "#7324E8" }}
                    variant="contained"
                  >
                    <Typography
                      style={{ ...buttonTextStyles, color: "#FFFFFF" }}
                    >
                      Create a new portofolio
                    </Typography>
                  </Button>
                  <Button
                    style={{ ...buttonStyles, background: "#E7DEEF" }}
                    variant="contained"
                  >
                    <Typography
                      style={{ ...buttonTextStyles, color: "#222222" }}
                    >
                      Edit portofolio
                    </Typography>
                  </Button>
                </Stack>
              )}
            </Stack>
            <Grid container height={"100%"}>
              <Grid item xs={3}>
                <Stack
                  direction="column"
                  spacing={5}
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <img
                    src={`data:image/png;base64,${userData?.profileImage}`}
                    style={profileImageStyles}
                  />
                  <Stack direction="column" spacing={1.5}>
                    <Button
                      onClick={() => {
                        setGeneralSettings(true);
                      }}
                      style={{
                        ...generalSettingsStyles,
                        background: generalSettings ? "#7324E8" : "#E7DEEF",
                      }}
                    >
                      <Typography
                        style={{
                          ...generalSettingsTextStyles,
                          color: generalSettings ? "white" : "black",
                        }}
                      >
                        General Settings
                      </Typography>
                    </Button>
                    <Button
                      onClick={() => {
                        setGeneralSettings(false);
                      }}
                      style={{
                        ...generalSettingsStyles,
                        background: !generalSettings ? "#7324E8" : "#E7DEEF",
                      }}
                    >
                      <Typography
                        style={{
                          ...generalSettingsTextStyles,
                          color: !generalSettings ? "white" : "black",
                        }}
                      >
                        Password Settings
                      </Typography>
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={9} height={"100%"}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  component={Paper}
                  spacing={10}
                  elevation={3}
                  padding={10}
                >
                  <Stack
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    paddingTop={1}
                    spacing={3}
                    height={"100%"}
                    paddingBottom={3}
                  >
                    {generalSettings ? (
                      <>
                        <Typography style={labelStyles} align="left">
                          Profile picture
                        </Typography>
                        <Typography style={labelStyles} align="left">
                          User Name:
                        </Typography>
                        <Typography style={labelStyles} align="left">
                          First name:
                        </Typography>
                        <Typography style={labelStyles} align="left">
                          Last name:
                        </Typography>
                        <Typography style={labelStyles} align="left">
                          Student:
                        </Typography>
                        <Typography style={labelStyles} align="left">
                          Email address:
                        </Typography>
                        <Typography style={labelStyles} align="left">
                          Phone number:
                        </Typography>
                        <Typography style={labelStyles} align="left">
                          Category:
                        </Typography>
                        <Typography style={labelStyles} align="left">
                          Adress:
                        </Typography>
                        <Typography style={labelStyles} align="left">
                          Date of Birth:
                        </Typography>
                        <Typography style={labelStyles} align="left">
                          Bio:
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography style={labelStyles} align="left">
                          New password:
                        </Typography>
                        <Typography style={labelStyles} align="left">
                          Confirm new password:
                        </Typography>
                      </>
                    )}
                  </Stack>
                  <Stack
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                    paddingTop={1}
                  >
                    {generalSettings ? (
                      <>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.readAsDataURL(file);
                              reader.onload = () => {
                                setUserData((prev) => {
                                  const newData = { ...prev };
                                  const fullBase64img = reader.result;
                                  const base64Image =
                                    fullBase64img.split(",")[1];
                                  newData.profileImage = base64Image;
                                  return newData;
                                });
                              };
                            }
                          }}
                          style={{ display: "none" }}
                          id="fileInput"
                        />
                        <Avatar
                          sx={{
                            bgcolor: "#C786FF",
                            width: 50,
                            height: 50,
                            cursor: "pointer",
                          }}
                          onClick={handleAvatarClick}
                        >
                          {" "}
                          {userData?.profileImage.length < 100 ? (
                            userData?.username.charAt(0)
                          ) : (
                            <img
                              style={{
                                objectFit: "cover",
                                width: 56,
                                height: 56,
                              }}
                              src={`data:image/png;base64,${userData?.profileImage}`}
                            />
                          )}
                        </Avatar>
                        <input
                          style={fieldsStyles}
                          value={userData?.username}
                          onChange={(e) => {
                            setUserData((prev) => {
                              return { ...prev, username: e.target.value };
                            });
                          }}
                        />
                        <input
                          style={fieldsStyles}
                          disabled
                          value={userData?.firstName}
                          onChange={(e) => {
                            setUserData((prev) => {
                              return { ...prev, firstName: e.target.value };
                            });
                          }}
                        />
                        <input
                          style={fieldsStyles}
                          disabled
                          value={userData?.lastName}
                          onChange={(e) => {
                            setUserData((prev) => {
                              return { ...prev, lastName: e.target.value };
                            });
                          }}
                        />
                        <Checkbox
                          checked={userData.student}
                          style={{ padding: 0 }}
                          onChange={(e) => {
                            setUserData((prev) => {
                              return { ...prev, student: e.target.checked };
                            });
                          }}
                        />
                        <input
                          style={fieldsStyles}
                          value={userData?.email}
                          onChange={(e) => {
                            setUserData((prev) => {
                              return { ...prev, email: e.target.value };
                            });
                          }}
                        />
                        <input
                          style={fieldsStyles}
                          value={userData?.phoneNumber}
                          onChange={(e) => {
                            setUserData((prev) => {
                              return { ...prev, phoneNumber: e.target.value };
                            });
                          }}
                        />
                        <Select
                          sx={{
                            width: "100%",
                            height: "40px",
                            background: "#EDF2F9",
                          }}
                          disabled
                          onChange={(e) => {
                            setUserData((prev) => {
                              return { ...prev, category: e.target.value };
                            });
                          }}
                          value={userData?.category}
                        >
                          <MenuItem value={"ART_COLLECTOR"}>
                            Art Collector
                          </MenuItem>
                          <MenuItem value={"ARCHITECTURE"}>
                            Architecture
                          </MenuItem>
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
                        <input
                          style={fieldsStyles}
                          value={userData?.address}
                          onChange={(e) => {
                            setUserData((prev) => {
                              return { ...prev, address: e.target.value };
                            });
                          }}
                        />
                        <input
                          style={fieldsStyles}
                          type="date"
                          disabled
                          value={userData?.birthOfDate}
                          onChange={(e) => {
                            setUserData((prev) => {
                              return { ...prev, birthOfDate: e.target.value };
                            });
                          }}
                        />
                        <input
                          style={fieldsStyles}
                          value={userData?.description}
                          onChange={(e) => {
                            setUserData((prev) => {
                              return { ...prev, description: e.target.value };
                            });
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <input
                          style={{
                            ...fieldsStyles,
                            border:
                              confirmPassword === userData.password
                                ? "none"
                                : "2px solid red",
                          }}
                          value={userData.password}
                          type="password"
                          onChange={(e) => {
                            setUserData((prev) => {
                              return { ...prev, password: e.target.value };
                            });
                          }}
                        />
                        <input
                          style={{
                            ...fieldsStyles,
                            border:
                              confirmPassword === userData.password
                                ? "none"
                                : "2px solid red",
                          }}
                          type="password"
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                          }}
                        />
                      </>
                    )}

                    <Button
                      disabled={
                        confirmPassword !== userData.password ||
                        userData.firstName === "" ||
                        userData.description === "" ||
                        userData.email === "" ||
                        userData.phoneNumber === "" ||
                        userData.address === ""
                      }
                      sx={{ width: "50%" }}
                      variant="contained"
                      onClick={() => {
                        updateSettings(authToken, userData);
                      }}
                    >
                      Update
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      )}

      <Grid item xs={12} padding={"8rem 8rem 0 8rem"}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Settings;
