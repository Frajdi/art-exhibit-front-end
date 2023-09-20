
import { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import ClearIcon from '@mui/icons-material/Clear';
import {  IconButton, Typography } from "@mui/material";


const containerStyles = {
    padding: "16px", // p-4
    width: "20%", // w-80
    height: '10%',
    display: "flex",
    justifyContent: 'center',
    alignItems: "center", // items-start
    borderRadius: "8px", // rounded-lg
    gap: "8px", // gap-2
    fontSize: "14px", // text-sm
    fontWeight: "500", // font-medium
    boxShadow: "0px 0px 73px 20px rgba(199,134,255,0.57) inset",
    color: "black", // text-white
    backgroundColor: "rgba(245,233,255, 0.7)",
    backdropFilter: " blur( 15px )",
    border: '1px solid #C882FF',
    position: "fixed",
    zIndex: "50", // z-50
    bottom: "16px", // bottom-4
    right: "16px", // right-4,
}

const textStyles = {
    textDecoration: "none",
    color: "#222222",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "20px",
  };

const NotificationToaster = ({ text, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif();
    }, 3000);

    return () => clearTimeout(timeoutRef);
  }, [text]);

  return (
    <motion.div
      layout
      initial={{ y: 15, scale: 0.9, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ y: -25, scale: 0.9, opacity: 0 }}
      transition={{ type: "spring" }}
      style={containerStyles}
    >
      <Typography style={textStyles}>{text}</Typography>
      <IconButton
      color="secondary"
        onClick={() => removeNotif()}
        style={{
          marginLeft: "auto", // ml-auto
          marginTop: "2px", // mt-0.5
          padding: 0
        }}
      >
        <ClearIcon />
      </IconButton>
    </motion.div>
  );
};

export default NotificationToaster;
