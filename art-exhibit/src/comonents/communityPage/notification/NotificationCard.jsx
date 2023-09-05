import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const decorLine = {
  width: "9px",
  height: "209px",
  background: "#C786FF",
};

const imgStyles = {
  borderRadius: "50%",
  width: "100px",
  height: "100px",
  objectFit: "cover",
  margin: '2rem'
};

const nameStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "30px",
};

const descriptionStyles = {
    ...nameStyles,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '23px',
    opacity: 0.3
}

const postStyles = {
    ...nameStyles,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '23px',
    opacity: 0.6,
    width: '35ch',
    paddingRight: '2rem'
}

const NotificationCard = ({ profileImg, username, post, id, setSelectedPost }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      sx={{ backgroundColor: "#F4F4F4", width: "100%", height: "209px", cursor: 'pointer' }}
      onClick = {() => {setSelectedPost(id)}}
    >
      <div style={decorLine}></div>
      <img src={profileImg} style={imgStyles} />
      <Stack direction="column" spacing={1}>
        <Typography style={nameStyles}>{username}</Typography>
        <Typography style={descriptionStyles}>Art update</Typography>
        <Typography style={postStyles}>{post}</Typography>
      </Stack>
    </Stack>
  );
};

export default NotificationCard;
