import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import SendIcon from '@mui/icons-material/Send';
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";

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
  margin: "2rem",
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
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "23px",
  opacity: 0.3,
};

const postStyles = {
  ...nameStyles,
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "23px",
  opacity: 0.6,
  width: "35ch",
  paddingRight: "2rem",
};

const inputStyles = {
    width: "100%",
    border: "none",
    borderBottom: "1px solid #ccc",
    padding: "8px",
    borderRadius: "0",
    boxShadow: "none",
    outline: "none",
    transition: "border-color 0.2s ease-in-out",
    "&:hover, &:focus": {
      borderColor: "#007bff", // Change border color on hover/focus
    },
  };

const fakeData = [
  {
    profileImg:
      "https://static.wixstatic.com/media/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg",
    username: "Alice Smith",
    post: "Just had a wonderful day at the park with my family! Just had a wonderful day at the park with my family! Just had a wonderful day at the park with my family! Just had a wonderful day at the park with my family!",
    id: 0,
  },
  {
    profileImg:
      "https://static.wixstatic.com/media/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg",
    username: "Bob Johnson",
    post: "Enjoying a relaxing weekend getaway by the beach.",
    id: 1,
  },
  {
    profileImg:
      "https://static.wixstatic.com/media/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg",
    username: "Eva Davis",
    post: "Celebrating my birthday with friends and cake!",
    id: 2,
  },
  {
    profileImg:
      "https://static.wixstatic.com/media/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg",
    username: "David Wilson",
    post: "Hiking in the mountains and loving the scenic views!",
    id: 3,
  },
  {
    profileImg:
      "https://static.wixstatic.com/media/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg",
    username: "Olivia Brown",
    post: "Trying out new recipes in the kitchen today. Cooking is fun!",
    id: 4,
  },
  {
    profileImg:
      "https://static.wixstatic.com/media/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg",
    username: "Sophia Lee",
    post: "Visited the art gallery and was inspired by the beautiful paintings.",
    id: 5,
  },
];

const NotificationCard = ({
  profileImg,
  username,
  post,
  id,
  setSelectedPost,
  selectedPost,
}) => {
  return (
    <Stack direction={"column"} sx={{ backgroundColor: "#F4F4F4" }}>
      <Stack
        direction={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        sx={{
          backgroundColor: "#F4F4F4",
          width: "100%",
          height: "209px",
          cursor: Boolean(selectedPost === null) && "pointer",
        }}
        onClick={() => {
          if (selectedPost === null) {
            setSelectedPost(id);
          }
        }}
      >
        <div style={decorLine}></div>
        <img src={profileImg} style={imgStyles} />
        <Stack direction="column" spacing={1}>
          <Typography style={nameStyles}>{username}</Typography>
          <Typography style={descriptionStyles}>Art update</Typography>
          <Typography style={{ postStyles }}>{post}</Typography>
        </Stack>
        {Boolean(selectedPost !== null) && (
          <Stack
            width={"100%"}
            height={"100%"}
            alignItems={"flex-end"}
            justifyContent={"flex-start"}
          >
            <IconButton
              sx={{ m: 3, color: "#C786FF", border: "2px solid #C786FF" }}
              onClick={() => {
                setSelectedPost(null);
              }}
            >
              <CloseFullscreenIcon fontSize="large" />
            </IconButton>
          </Stack>
        )}
      </Stack>
      {Boolean(selectedPost !== null) && (
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={3}
          padding={5}
        >
          {fakeData.map((reply) => {
            return (
              <Stack
                direction="row"
                sx={{
                  background: "#FFFFFF",
                  width: "70%",
                  height: "80%",
                  borderRadius: "30px",
                }}
                alignItems={"center"}
                justifyContent={"flex-start"}
              >
                <img
                  src={profileImg}
                  style={{ ...imgStyles, width: "80px", height: "80px" }}
                />
                <Stack direction="column" spacing={1}>
                  <Typography style={nameStyles}>{username}</Typography>
                  <Typography style={descriptionStyles}>Art update</Typography>
                  <Typography style={{ ...postStyles, width: "95%" }}>
                    {post}
                  </Typography>
                </Stack>
              </Stack>
            );
          })}
          <Stack direction={'row'} sx={{width: '70%'}} alignItems={'center'}>
            <TextField
              placeholder="Reply..."
              variant="outlined"
              fullWidth
              style={inputStyles}
            />
            <IconButton color="primary" sx={{ background: "#C786FF", color: 'white', border: "2px solid #C786FF" , borderRadius: '15px', height: '90%'}} aria-label="Send">
              <SendIcon />
            </IconButton>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default NotificationCard;
