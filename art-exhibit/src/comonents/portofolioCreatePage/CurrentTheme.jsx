import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ApartureTheme from "./ApartureTheme";
import AspectTheme from "./AspectTheme";
import DraytonTheme from "./DraytonTheme";
import apertureFakeData from "./fakeData/apertureFakeData";
import aspectFakeData from "./fakeData/aspectFakeData";
import draytonFakeData from "./fakeData/draytonFakeData";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import useCreatePortofolio from "../../commands/createPortofolio";
import { useArtContext } from "../../state/AppContext";

//Styles

const editSectionStyles = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  borderRadius: "50px 50px 0 0",
  backgroundColor: "rgba(245,233,255, 0.6)",
  border: "1px solid rgba(255, 255, 255, 0.8)",
  backdropFilter: " blur( 50px )",
  height: "20%",
  zIndex: 20,
  overflow: "hidden",
};

const textFieldStyles = {
  style: {
    height: "100%",
    background: "#c0d8e0",
    color: "#333333",
    borderRadius: "500px",
    border: "1px solid rgba(255, 255, 255, 0.8)",
  },
};

const buttonStyles = {
  width: "20%",
  height: "40%",
  background: "#e0e0e0",
  color: "#333333",
  textTransform: "none",
  borderRadius: "500px",
  border: "1px solid rgba(255, 255, 255, 0.8)",
  "&:hover": {
    color: "white",
  },
};

const ButtonTextStyles = {
  fontFamily: "Poppins, sans-serif",
  fontSize: "23px",
  fontWeight: 500,
  width: "75%",
};

//

const defaultData = {
  aperture: apertureFakeData,
  aspect: aspectFakeData,
  drayton: draytonFakeData,
};

const CurrentTheme = () => {
  const navigate = useNavigate();
  const { theme } = useParams();
  const { authToken } = useArtContext();
  const { createPortofolio, isLoading } = useCreatePortofolio();

  const [themeContent, setThemeContent] = useState(defaultData[theme]);
  const [editeblePath, setEditeblePath] = useState(null);
  const [textUpdate, setTextUpdate] = useState(true);
  const [fontFamily, setFontFamily] = useState("Poppins, sans-serif");

  useEffect(() => {
    if (editeblePath !== null) {
      const pathArray = editeblePath.split(".");
      if (pathArray[pathArray.length - 1] === "img") {
        setTextUpdate(false);
      } else {
        setTextUpdate(true);
      }
    }
  }, [editeblePath]);

  const getValue = () => {
    if (editeblePath === null) {
      return "";
    } else {
      const pathArray = editeblePath.split(".");
      if (pathArray[pathArray.length - 1] === "img") {
        return "";
      }
      return editeblePath
        .split(".")
        .reduce((obj, key) => obj[key], themeContent);
    }
  };

  const setValue = (newValue) => {
    setThemeContent((prevThemeContent) => {
      // deep clone theme content
      const newThemeContent = JSON.parse(JSON.stringify(prevThemeContent));

      // Split the property path
      const pathSegments = editeblePath.split(".");
      let currentObj = newThemeContent;

      // Traverse the object to reach the desired key
      for (const segment of pathSegments.slice(0, -1)) {
        currentObj = currentObj[segment];
      }

      // Update the specific key within the nested object
      currentObj[pathSegments[pathSegments.length - 1]] = newValue;

      return newThemeContent;
    });
  };

  const handleUploadImage = () => {
    // Trigger the hidden file input when the avatar is clicked
    document.getElementById("fileInput").click();
  };

  const handleCreatePortofolio = async () => {
    const jsonTheme = {
      themeType: theme,
      fontFamily: fontFamily,
      themeContent: themeContent,
    };
    const body = {
      name: themeContent.firstSection.headerTitle,
      jsonTheme: JSON.stringify(jsonTheme),
    };

    console.log(body);
    await createPortofolio(body, authToken);
    navigate("/portofolio");
  };

  return (
    <>
      {theme === "aperture" ? (
        <ApartureTheme
          themeContent={themeContent}
          fontFamily={fontFamily}
          setEditeblePath={setEditeblePath}
        />
      ) : theme === "aspect" ? (
        <AspectTheme
          themeContent={themeContent}
          fontFamily={fontFamily}
          setEditeblePath={setEditeblePath}
        />
      ) : (
        <DraytonTheme
          themeContent={themeContent}
          fontFamily={fontFamily}
          setEditeblePath={setEditeblePath}
        />
      )}
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
        sx={editSectionStyles}
      >
        {textUpdate ? (
          <TextField
            value={getValue()}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Click on the elements you want to change and you can edit here"
            variant="outlined"
            fullWidth
            style={{ width: "50%", height: "45%" }}
            InputProps={textFieldStyles}
          />
        ) : (
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
                    const fullBase64img = reader.result;
                    const base64Image = fullBase64img.split(",")[1];
                    setValue(base64Image);
                  };
                }
              }}
              style={{ display: "none" }}
              id="fileInput"
            />
            <Button
              onClick={() => handleUploadImage()}
              sx={{ ...buttonStyles, background: "#FFFFFF" }}
              startIcon={
                <UploadFileIcon sx={{ width: "2rem", height: "100%" }} />
              }
              variant="contained"
            >
              <Typography style={ButtonTextStyles}>Upload Image</Typography>
            </Button>
          </>
        )}
        <FormControl variant="outlined" sx={{width: '15%', pt: '1rem'}}>
        <InputLabel id="select-label">Select font family</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
          <MenuItem value="Poppins, sans-serif">Poppins</MenuItem>
          <MenuItem value="'Playfair Display', serif">Playfair</MenuItem>
          <MenuItem value="'Anton', sans-serif">Anton</MenuItem>
          <MenuItem value="'Bebas Neue', sans-serif">Bebas Neue</MenuItem>
          <MenuItem value="'Inconsolata', monospace">Inconsolata</MenuItem>
          <MenuItem value="'Mooli', sans-serif">Mooli</MenuItem>
          <MenuItem value="'Ubuntu', sans-serif">Ubuntu</MenuItem>
        </Select>
        </FormControl>
        <Button
          onClick={() => {
            handleCreatePortofolio();
          }}
          sx={buttonStyles}
          startIcon={
            isLoading ? null : (
              <CreateNewFolderIcon sx={{ width: "2rem", height: "100%" }} />
            )
          }
          variant="contained"
        >
          {isLoading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            <Typography style={ButtonTextStyles}>Save Portofolio</Typography>
          )}
        </Button>
      </Stack>
    </>
  );
};

export default CurrentTheme;
