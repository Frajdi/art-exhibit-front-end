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
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import useCreatePortofolio from "../../commands/createPortofolio";
import { useArtContext } from "../../state/AppContext";
import useGetMyPortofolio from "../../commands/getMyPortofolio";
import useUpdatePortofolio from "../../commands/updatePortofolio";

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
  width: "25%",
  height: "50%",
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

const EditPortofolio = () => {
  const navigate = useNavigate();
  const { getMyPortofolio, data } = useGetMyPortofolio();
  const { authToken } = useArtContext();

  const { updatePortofolio, isLoading } = useUpdatePortofolio();

  const [themeContent, setThemeContent] = useState(null);
  const [theme, setTheme] = useState(null);
  const [editeblePath, setEditeblePath] = useState(null);
  const [textUpdate, setTextUpdate] = useState(true);
  const [portofolioId, setPortofolioId] = useState(null);

  useEffect(() => {
    console.log({ authToken });
    getMyPortofolio(authToken);
  }, [authToken]);

  useEffect(() => {
    if (data) {
      console.log({ data });
      setThemeContent(JSON.parse(data.jsonTheme).themeContent);
      setTheme(JSON.parse(data.jsonTheme).themeType);
      setPortofolioId(data.id);
    }
  }, [data]);

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

  const handleUpdatePortofolio = async () => {
    const jsonTheme = {
      themeType: theme,
      themeContent: themeContent,
    };
    const body = {
      name: themeContent.firstSection.headerTitle,
      jsonTheme: JSON.stringify(jsonTheme),
    };

    await updatePortofolio(body, portofolioId, authToken);
    navigate("/portofolio");
  };

  return themeContent ? (
    <>
      {theme === "aperture" ? (
        <ApartureTheme
          themeContent={themeContent}
          setEditeblePath={setEditeblePath}
        />
      ) : theme === "aspect" ? (
        <AspectTheme
          themeContent={themeContent}
          setEditeblePath={setEditeblePath}
        />
      ) : (
        <DraytonTheme
          themeContent={themeContent}
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
        <Button
          onClick={() => {
            handleUpdatePortofolio();
          }}
          sx={buttonStyles}
          startIcon={
            isLoading ? null : (
              <UpdateIcon sx={{ width: "2rem", height: "100%" }} />
            )
          }
          variant="contained"
        >
          {isLoading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            <Typography style={ButtonTextStyles}>Update Portofolio</Typography>
          )}
        </Button>
      </Stack>
    </>
  ) : (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <CircularProgress size={"8rem"} />
    </Box>
  );
};

export default EditPortofolio;
