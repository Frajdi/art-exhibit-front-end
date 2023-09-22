import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import ArtistsGrid from "../artistsPage/ArtistsGrid";
import CategorySearchBar from "./CategorySearchBar";
import { Typography } from "@mui/material";

const titleStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "40px",
  lineHeight: "60px",
  margin: '5rem',
};

const CategorySearchGrid = ({ artistsData }) => {
  const [artists, setArtists] = useState(artistsData.filter(artist => artist.category !== 'ART_COLLECTOR'));
  const [filteredArtistsByCategory, setFilteredArtistsByCategory] =
    useState(artistsData);

  useEffect(() => {
    console.log({ filteredArtistsByCategory });
  }, [filteredArtistsByCategory]);

  return (
    <Stack direction="column" spacing={3} width={"100%"} alignItems="center">
      <CategorySearchBar
        artists={artists}
        setFilteredArtistsByCategory={setFilteredArtistsByCategory}
      />
      {filteredArtistsByCategory.length === 0 ? (
        <Typography style={titleStyles}>No artist matches this category</Typography>
      ) : (
        <ArtistsGrid
          artists={filteredArtistsByCategory}
          scrollTopHeight={600}
        />
      )}
    </Stack>
  );
};

export default CategorySearchGrid;
