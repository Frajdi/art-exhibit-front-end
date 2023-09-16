import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import { Avatar, InputAdornment, TextField } from "@mui/material";
import useCreateComment from "../../../commands/createComment";
import { useArtContext } from "../../../state/AppContext";

const decorLine = {
  width: "9px",
  height: "209px",
  background: "#C786FF",
};

const imgStyles = {
  width: "100px",
  height: "100px",
  objectFit: "cover",
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
  background: "#FFFFFF",
  outline: "none",
  fontSize: "20px",
  transition: "border-color 0.2s ease-in-out",
  "&:hover, &:focus": {
    borderColor: "#222222", // Change border color on hover/focus
  },
};

const NotificationCard = ({
  profileImg,
  username,
  post,
  id,
  title,
  comments,
  setSelectedPost,
  selectedPost,
  createdAt,
}) => {
  console.log('>>>>',profileImg, username);
  const [currentComments, setCurrentComments] = useState(comments);
  const [currentComment, setCurrentComment] = useState({
    description: "",
    notificationId: id,
    title: title,
  });

  const { data, createComment } = useCreateComment();
  const { authToken } = useArtContext();

  const sendComment = async () => {
    await createComment(currentComment, authToken);
    setCurrentComment({
      description: "",
      notificationId: id,
      title: title,
    });
  };

  useEffect(() => {
    console.log(currentComments);
  }, [currentComments]);

  useEffect(() => {
    if (data) {
      setCurrentComments((prev) => [...prev, data]);
    }
  }, [data]);

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
        <Avatar
          sx={{
            width: "80px",
            height: "80px",
            bgcolor: "#C786FF",
            m: 3
          }}
        >
          {profileImg.length < 100 ? (
            username.charAt(0)
          ) : (
            <img
              style={imgStyles}
              src={`data:image/png;base64,${profileImg}`}
            />
          )}
        </Avatar>
        <Stack direction="row" spacing={1} width={"100%"}>
          <Stack direction="column" spacing={1} width={"100%"}>
            <Typography style={nameStyles}>{username}</Typography>
            <Typography style={descriptionStyles}>{title}</Typography>
            <Typography
              style={{
                ...postStyles,
                width: Boolean(selectedPost !== null) && "100%",
              }}
            >
              {post}
            </Typography>
          </Stack>
          <Typography align="center" sx={{ opacity: 0.5, width: "100%" }}>
            {new Date(createdAt).toLocaleString()}
          </Typography>
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
          {currentComments.length !== 0 &&
            currentComments.map((comment) => {
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
                    src={`data:image/png;base64,${comment.artist.profileImage}`}
                    style={{ ...imgStyles, width: "80px", height: "80px" }}
                  />
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent={"space-between"}
                    width={"100%"}
                  >
                    <Stack direction="column" spacing={1}>
                      <Typography style={nameStyles}>
                        {comment.artist.username}
                      </Typography>
                      <Typography style={{ ...postStyles, width: "95%" }}>
                        {comment.description}
                      </Typography>
                    </Stack>
                    <Stack width={"100%"} alignItems={"flex-end"}>
                      <Typography
                        align="right"
                        style={{ ...postStyles, opacity: 0.4 }}
                      >
                        {new Date(comment.createdAt).toLocaleString()}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              );
            })}
          <Stack direction={"row"} sx={{ width: "70%" }} alignItems={"center"}>
            <TextField
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendComment();
                }
              }}
              value={currentComment.description}
              onChange={(e) => {
                setCurrentComment((prev) => {
                  return { ...prev, description: e.target.value };
                });
              }}
              placeholder="Reply..."
              variant="outlined"
              fullWidth
              style={inputStyles}
              InputProps={{
                style: inputStyles,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        sendComment();
                      }}
                      color="primary"
                      sx={{
                        background: "#C786FF",
                        color: "white",
                        border: "2px solid #C786FF",
                        borderRadius: "50%",
                      }}
                      aria-label="Send"
                    >
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default NotificationCard;
