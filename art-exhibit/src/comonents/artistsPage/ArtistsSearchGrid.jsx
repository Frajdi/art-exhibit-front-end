import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import SearchBar from "./SearchBar";
import ArtistsGrid from "./ArtistsGrid";


const ArtistsSearchGrid = ({artistsData}) => {
    const [artists, setArtists] = useState(artistsData)
    const [filteredArtists, setFilteredArtists] = useState(artistsData)
    useEffect(() => {
      console.log({artists});
    },[artists])
  return (
    <Stack direction='column' spacing={3} width={'100%'} alignItems='center'>
      <SearchBar artists={artists} setFilteredArtists = {setFilteredArtists} />
      <ArtistsGrid artists={filteredArtists} scrollTopHeight={20}/>
    </Stack>
  );
};

export default ArtistsSearchGrid;
