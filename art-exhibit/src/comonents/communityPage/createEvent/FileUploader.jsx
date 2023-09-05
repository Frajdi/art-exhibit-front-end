import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";

const FileUploader = ({ eventData, setEventData }) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setHovered(false);
  }, [eventData.photo]);

  return (
    <Paper
      elevation={3}
      style={{
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "70%",
        background:
          "url(https://images.unsplash.com/photo-1608371945786-d47d3cdd31da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydCUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D&w=1000&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          height: "68.58%",
          width: "33.9%",
          position: "relative",
          left: "3.7rem",
          bottom: "3.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: 'white'
        }}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
      {eventData.photo && <img
          src={`data:image/png;base64,${eventData.photo}`}
          alt="Uploaded"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: 'absolute'
          }}
        />}
        
        {(!eventData.photo || hovered) && (
          <>
            <Typography variant="h5" gutterBottom>
              File Uploader
            </Typography>
            <label htmlFor="file-input">
              <input
                type="file"
                id="eventImage"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                      setEventData((prev) => {
                        const newData = { ...prev };
                        const fullBase64img = reader.result;
                        const base64Image = fullBase64img.split(",")[1];
                        newData.photo = base64Image;
                        return newData;
                      });
                    };
                  }
                }}
              />
              <Button
                variant="contained"
                component="span"
                color="primary"
                startIcon={<CloudUploadIcon />}
                onClick={() => {
                  document.getElementById("eventImage").click();
                }}
              >
                Select Image
              </Button>
            </label>
          </>
        )}
      </div>
    </Paper>
  );
};

export default FileUploader;
