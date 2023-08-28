import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import SearchBar from "./SearchBar";
import ArtistsGrid from "./ArtistsGrid";

const data = [
  {
    name: "John Adam",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
    wallpaperImage:
      "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
  },
  {
    name: "Ben Adam",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
    wallpaperImage:
      "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
  },
  {
    name: "Cenedy Adam",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
    wallpaperImage:
      "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
  },
  {
    name: "Joshua Adam",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
    wallpaperImage:
      "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
  },
  {
    name: "Barn Adam",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
    wallpaperImage:
      "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
  },
  {
    name: "Jake Adam",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
    wallpaperImage:
      "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
  },
  {
    name: "Carny Adam",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
    wallpaperImage:
      "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
  },
  {
    name: "Cenny Adam",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
    wallpaperImage:
      "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
  },
  {
    name: "Costa Adam",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
    wallpaperImage:
      "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
  },
  {
    name: "Borat Adam",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
    wallpaperImage:
      "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
  },
];

const ArtistsSearchGrid = () => {
    const [artists, setArtists] = useState(data)
    const [filteredArtists, setFilteredArtists] = useState(data)
  return (
    <Stack direction='column' spacing={3} width={'100%'} alignItems='center'>
      <SearchBar artists={artists} setFilteredArtists = {setFilteredArtists} />
      <ArtistsGrid artists={filteredArtists} scrollTopHeight={20}/>
    </Stack>
  );
};

export default ArtistsSearchGrid;
