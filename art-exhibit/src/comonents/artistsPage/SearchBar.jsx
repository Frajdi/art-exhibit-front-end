import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

const titleStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "40px",
  lineHeight: "60px",
  margin: 3,
};

const searchStyles = {
  width: '384px',
  height: '50px',
  borderRadius: '10px',
  backgroundColor: 'rgba(89, 89, 89, 0.1)',
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "30px",
}


const SearchBar = ({artists, setFilteredArtists}) => {

    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const filteredArtists = artists.filter(artist => {
            return artist.name.toLowerCase().includes(searchValue.toLowerCase())
        })
        setFilteredArtists(filteredArtists)
    }, [searchValue])


  return (
    <Stack width={"100%"} alignItems={"center"}>
      <Typography style={titleStyles}>Artists</Typography>
      <OutlinedInput
      value={searchValue}
      onChange={(e) => {setSearchValue(e.target.value)}}
      style={searchStyles}
        placeholder="Search artists"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <FilterListIcon />
          </InputAdornment>
        }
      />
    </Stack>
  );
};

export default SearchBar;
