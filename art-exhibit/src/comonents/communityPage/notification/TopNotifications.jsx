import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import NotificationCard from "./NotificationCard";
import { AnimatePresence, motion } from "framer-motion";

const fakeData = [
  {
    profileImg:
      "https://static.wixstatic.com/media/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg",
    username: "Alice Smith",
    post: "Just had a wonderful day at the park with my family!",
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

const TopNotifications = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <Grid container width={"100%"} spacing={0} component={motion.div} layout>
      <AnimatePresence mode='wait'  initial={false}>
        {fakeData.map(({ profileImg, username, post, id }, index) => {
          if (selectedPost === id) {
            return (
              <Grid
                item
                xs={selectedPost === id ? 12 : 6}
                padding={"2rem"}
                style={{ overflow: "hidden" }}
                component={motion.div}
                layout
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: .2 , ease: 'easeOut'}}
              >
                <NotificationCard
                  profileImg={profileImg}
                  username={username}
                  post={post}
                  id={id}
                  setSelectedPost={setSelectedPost}
                  selectedPost={selectedPost}
                />
              </Grid>
            );
          } else if (selectedPost === null) {
            return (
              <Grid
                item
                xs={selectedPost === id ? 12 : 6}
                padding={"2rem"}
                style={{ overflow: "hidden" }}
                component={motion.div}
                layout
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: .2 , ease: 'easeOut'}}
              >
                <NotificationCard
                  profileImg={profileImg}
                  username={username}
                  post={post}
                  id={id}
                  setSelectedPost={setSelectedPost}
                  selectedPost={selectedPost}
                />
              </Grid>
            );
          }
        })}
      </AnimatePresence>
    </Grid>
  );
};

export default TopNotifications;
