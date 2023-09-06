import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AnimatePresence, motion } from "framer-motion";
import ArtistCard from "./ArtistCard";
import Flashcards from "./Portofolios";

const previewCardStyles = {
  width: "100%",
  height: "60vh",
  borderRadius: "10px",
  paddingBottom: 10,
};

const previewArtistStyles = {
  height: "100%",
  width: "30%",
};

const previewPortofolioStyles = {
  height: "100%",
  width: "70%",
  overflow: "hidden",
  backdropFilter: "blur(16px) saturate(180%)",
  WebkitBackdropFilter: "blur(16px) saturate(180%)",
  backgroundColor: "rgba(245,233,255, 0.7)",
  //   background:
  //     "radial-gradient(circle 929px at 0.6% 1.3%, #c786ff 0%, #ffbcff 82.6%)",
  borderRadius: "15px",
  border: "1px solid rgba(255, 255, 255, 0.125)",
  boxShadow: "0 5px 4px rgba(0,0,0,0.25)",
};

const namePreviewStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "40px",
};

const wrapperVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    transition: { duration: 0.4 },
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
  exit: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    transition: { duration: 0.4 },
  },
};
const squareVariants = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

const ArtistsGrid = ({ artists, scrollTopHeight }) => {
  const [selectedSquare, setSelectedSquare] = useState(null);

  const renderArtists = () => (
    <Grid container layout component={motion.div} spacing={5} padding={5}>
      <AnimatePresence>
        {artists.map((artist) => {
          return (
            <Grid item xs={4} key={artist.name}>
              <Stack alignItems={"center"}>
                <ArtistCard
                  selectedSquare={selectedSquare}
                  artist={artist}
                  setSelectedSquare={setSelectedSquare}
                  variants={squareVariants}
                  scrollTopHeight={scrollTopHeight}
                  key={artist.username}
                />
              </Stack>
            </Grid>
          );
        })}
      </AnimatePresence>
    </Grid>
  );

  return (
    <AnimatePresence mode="wait">
      {selectedSquare ? (
        <Stack
          component={motion.div}
          variants={wrapperVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={previewCardStyles}
          direction="row"
          alignItems="flex-end"
          transition={{ duration: 2 }}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            style={previewArtistStyles}
          >
            <ArtistCard
              artist={selectedSquare}
              setSelectedSquare={setSelectedSquare}
              variants={squareVariants}
              selectedSquare={selectedSquare}
            />
          </Stack>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="flex-end"
            style={previewPortofolioStyles}
          >
            <Typography
              style={{
                ...namePreviewStyles,
                color: "#222222",
                fontSize: "50px",
                padding: 5,
                position: "absolute",
                top: "1rem",
              }}
              align="center"
            >
              Portofolio
            </Typography>
            <Flashcards />
          </Stack>
        </Stack>
      ) : (
        <motion.div
          variants={wrapperVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
          }}
          transition={{ duration: 2 }}
        >
          {renderArtists()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArtistsGrid;
