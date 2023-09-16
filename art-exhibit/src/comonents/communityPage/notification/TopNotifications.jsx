import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import NotificationCard from "./NotificationCard";
import { AnimatePresence, motion } from "framer-motion";
import useGetNotifications from "../../../commands/getNotifications";


const TopNotifications = ({refetchNotifications, setRefetchNotifications}) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [notifications, setNotifications] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { data, getNotifications } = useGetNotifications();

  useEffect(() => {
    if(refetchNotifications) {
      getNotifications(currentPage);
      setRefetchNotifications(false)
    }
  }, [currentPage, refetchNotifications]);

  useEffect(() => {
    getNotifications(currentPage);
  },[])

  useEffect(() => {
    if (data) {
      console.log(data);
      setNotifications(data.reverse());
    }
  }, [data]);

  return (
    <Grid container width={"100%"} spacing={0} component={motion.div} layout>
      <AnimatePresence mode="wait" initial={false}>
        {notifications !== null &&
          notifications.map((notification, index) => {
            if (selectedPost === notification.id) {
              return (
                <Grid
                  item
                  xs={selectedPost === notification.id ? 12 : 6}
                  padding={"2rem"}
                  style={{ overflow: "hidden" }}
                  component={motion.div}
                  layout
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <NotificationCard
                    profileImg={notification.artist.profileImage}
                    username={notification.artist.username}
                    post={notification.description}
                    id={notification.id}
                    title={notification.title}
                    comments={notification.comments}
                    setSelectedPost={setSelectedPost}
                    selectedPost={selectedPost}
                    createdAt={notification.createdAt}
                  />
                </Grid>
              );
            } else if (selectedPost === null) {
              return (
                <Grid
                  item
                  xs={selectedPost === notification.id ? 12 : 6}
                  padding={"2rem"}
                  style={{ overflow: "hidden" }}
                  component={motion.div}
                  layout
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <NotificationCard
                    profileImg={notification.artist.profileImage}
                    username={notification.artist.username}
                    post={notification.description}
                    id={notification.id}
                    title={notification.title}
                    comments={notification.comments}
                    setSelectedPost={setSelectedPost}
                    selectedPost={selectedPost}
                    createdAt={notification.createdAt}
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
