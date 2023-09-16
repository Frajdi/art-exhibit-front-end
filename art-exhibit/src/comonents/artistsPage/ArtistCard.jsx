import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import VisibilityIcon from "@mui/icons-material/Visibility";


const cardStyles = {
  width: "90%",
  height: "420px",
  paddingBottom: 30,
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 5px 4px rgba(0,0,0,0.25)",
};

const viewButtonStyles = {
  color: "#7022e7",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "30px",
  borderColor: "#7022e7",
  height: "40px",
  width: "80%",
  textTransform: "none",
};

const wallpaperImageStyles = {
  width: "100%",
  height: "50%",
  objectFit: "cover",
  borderRadius: "10px",
};

const profilePictureStyles = {
  width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "50%",
  marginTop: "-3.5rem",
};

const titleStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "30px",
};

const bioStyles = {
  ...titleStyles,
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "22.5px",
  color: "rgba(34, 34, 34, 0.5)",
};

const buttonStyles = {
  height: "40px",
  width: "80%",
  background: "linear-gradient(to right, #671AE4, #B75CFF)",
  textTransform: "none",
};

const buttonTextStyles = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "30px",
  marginLeft: 3,
};

const ArtistCard = ({
  artist,
  setSelectedSquare,
  variants,
  selectedSquare,
  scrollTopHeight,
}) => {
  const navigate = useNavigate()
  const { username, description, profileImage } = artist;

  console.log('>>>>>>>>>>', artist);
  return (
    <Stack
      layout
      direction="column"
      style={cardStyles}
      alignItems={"center"}
      component={motion.div}
      variants={variants}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, type: "spring" }}
    >
      <img
        src={
          profileImage
            ? `data:image/png;base64,${profileImage}`
            : "https://media.istockphoto.com/id/174923556/photo/3d-illuminated-podium.jpg?s=612x612&w=0&k=20&c=WC7GBNAhyDYQeVfkTIA6h9ohR8gH89nTPWZweSdcnLo="
        }
        style={wallpaperImageStyles}
      />
      <img
        src={
          profileImage
            ? `data:image/png;base64,${profileImage}`
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDL0XSeU9gN2IENmQwvTt0wHfcOZwvRe4oxAez1guBRPs4hrvADSiOrSphBATx3gmIXM&usqp=CAU"
        }
        style={profilePictureStyles}
      />
      <Stack direction="column" alignItems="center" spacing={2} width={"100%"}>
        <Typography style={titleStyles}>{username}</Typography>
        <Typography style={bioStyles} align="center">
          {description ? description : "No Bio Available For This Artist"}
        </Typography>
        {selectedSquare ? (
          <>
            <Button
              onClick={() => setSelectedSquare(null)}
              variant="contained"
              style={buttonStyles}
            >
              <Typography style={buttonTextStyles}>- Less</Typography>
            </Button>
            <Button
            startIcon={<VisibilityIcon />}
            disabled={artist.portfolio === null}
              onClick={(e) => {
                console.log(artist)
                navigate(`/view/${username}/${artist.id}`);
              }}
              variant="outlined"
              style={viewButtonStyles}
            >
              <Typography style={buttonTextStyles}>View Portfolio</Typography>{" "}
              
            </Button>
          </>
        ) : (
          <Button
            onClick={() => {
              setSelectedSquare(artist);
              window.scrollTo({
                top: scrollTopHeight,
                behavior: "smooth", // This provides a smooth scroll animation
              });
            }}
            variant="contained"
            style={buttonStyles}
          >
            <Typography style={buttonTextStyles}>+ More</Typography>
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default ArtistCard;
