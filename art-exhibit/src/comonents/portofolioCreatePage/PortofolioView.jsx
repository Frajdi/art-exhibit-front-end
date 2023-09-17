import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ApartureTheme from "./ApartureTheme";
import AspectTheme from "./AspectTheme";
import DraytonTheme from "./DraytonTheme";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import usePortofolioById from "../../commands/getPortofolioById";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useArtContext } from "../../state/AppContext";
import useAddToCollection from "../../commands/addToCollection";
import useGetCollections from "../../commands/getCollections";
import useRemoveFromCOllection from "../../commands/removeFromCollection";

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
  width: "45%",
};

const PortofolioView = () => {
  const navigate = useNavigate(-1);
  const { id } = useParams();
  const { getPortofolioById, data } = usePortofolioById();
  const { category, authToken } = useArtContext();
  const { addToCollection, isLoading } = useAddToCollection();
  const {
    getCollection,
    isLoading: loadingCollections,
    data: collections,
  } = useGetCollections();
  const {isLoading: removalLoading, removeFromCollection} = useRemoveFromCOllection()

  const [isCollected, setIsCollected] = useState(false);
  const [collectionId, setCollectionId] = useState(null)

  const [themeContent, setThemeContent] = useState(null);
  const [theme, setTheme] = useState(null);
  const [fontFamily, setFontFamily] = useState("Poppins, sans-serif");

  useEffect(() => {
    getPortofolioById(id);
  }, []);
  
  useEffect(() => {
    if(authToken){
      getCollection(authToken);
    }
  }, [authToken])

  useEffect(() => {
    if (data) {
      setThemeContent(JSON.parse(data.jsonTheme).themeContent);
      setTheme(JSON.parse(data.jsonTheme).themeType);
      setFontFamily(JSON.parse(data.jsonTheme).fontFamily);
    }
  }, [data, collections]);

  useEffect(() => {
    if (collections && data) {
      console.log({ collections });
      const collection = collections.find((collection) => {
        return collection.portfolio.id === data.id;
      });
      console.log({collection});
      if (collection !== undefined) {
        setIsCollected(true);
        setCollectionId(collection.id)
        console.log('iddddd',collection.id);
      } else {
        setIsCollected(false);
      }
    }
  }, [collections, data]);

  const handleAddToCollection = async () => {
    await addToCollection(data.id, authToken);
    setIsCollected(true);
  };

  return themeContent ? (
    <>
      {theme === "aperture" ? (
        <ApartureTheme
          themeContent={themeContent}
          setEditeblePath={() => {}}
          fontFamily={fontFamily}
        />
      ) : theme === "aspect" ? (
        <AspectTheme
          themeContent={themeContent}
          setEditeblePath={() => {}}
          fontFamily={fontFamily}
        />
      ) : (
        <DraytonTheme
          themeContent={themeContent}
          setEditeblePath={() => {}}
          fontFamily={fontFamily}
        />
      )}
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
        sx={editSectionStyles}
      >
        <Button
          onClick={() => {
            navigate(-1);
          }}
          sx={{ ...buttonStyles, background: "#FFFFFF" }}
          startIcon={<ArrowBackIcon sx={{ width: "2rem", height: "100%" }} />}
          variant="contained"
        >
          <Typography style={ButtonTextStyles}>Go Back</Typography>
        </Button>
        {category === "ART_COLLECTOR" && (
          <Button
            onClick={() => {
              if(isCollected){
                // removeCollection
                removeFromCollection(collectionId, authToken)
                setIsCollected(false)
              }else{
              handleAddToCollection();
              }
            }}
            sx={{
              ...buttonStyles,
              background: "#FFFFFF",
              width: isCollected ? "35%" : "25%",
            }}
            startIcon={
              isLoading ? null : isCollected ? (
                <DeleteOutlineIcon sx={{ width: "2rem", height: "100%" }} />
              ) : (
                <AddPhotoAlternateIcon sx={{ width: "2rem", height: "100%" }} />
              )
            }
            variant="contained"
          >
            {isLoading || loadingCollections || removalLoading ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : (
              <Typography
                style={{
                  ...ButtonTextStyles,
                  width: isCollected ? "65%" : "45%",
                }}
              >
                {isCollected ? "Remove from collection" : "Collect"}
              </Typography>
            )}
          </Button>
        )}
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

export default PortofolioView;
