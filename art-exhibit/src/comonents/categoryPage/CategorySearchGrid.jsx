import React, { useState } from 'react'
import Stack from "@mui/material/Stack";
import ArtistsGrid from '../artistsPage/ArtistsGrid';
import CategorySearchBar from './CategorySearchBar';


const data = [
    {
      name: "John Adam",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileImage:
        "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
      wallpaperImage:
        "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
      category: "ARCHITECTURE",
    },
    {
      name: "Ben Adam",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileImage:
        "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
      wallpaperImage:
        "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
      category: "CALLIGRAPHY",
    },
    {
      name: "Cenedy Adam",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileImage:
        "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
      wallpaperImage:
        "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
      category: "CINEMATOGRAPHY",
    },
    {
      name: "Joshua Adam",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileImage:
        "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
      wallpaperImage:
        "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
      category: "DANCE",
    },
    {
      name: "Barn Adam",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileImage:
        "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
      wallpaperImage:
        "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
      category: "",
    },
    {
      name: "Jake Adam",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileImage:
        "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
      wallpaperImage:
        "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
      category: "DRAWING",
    },
    {
      name: "Carny Adam",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileImage:
        "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
      wallpaperImage:
        "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
      category: "FILM",
    },
    {
      name: "Cenny Adam",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileImage:
        "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
      wallpaperImage:
        "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
      category: "MUSIC",
    },
    {
      name: "Costa Adam",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileImage:
        "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
      wallpaperImage:
        "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
      category: "PAINTING",
    },
    {
      name: "Borat Adam",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileImage:
        "https://www.leisureopportunities.co.uk/images/995586_746594.jpg",
      wallpaperImage:
        "https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg",
      category: "PHOTOGRAPHY",
    },
  ];
  

const CategorySearchGrid = () => {

    const [artists, setArtists] = useState(data)
    const [filteredArtistsByCategory, setFilteredArtistsByCategory] = useState(data)

  return (
    <Stack direction='column' spacing={3} width={'100%'} alignItems='center'>
      <CategorySearchBar artists={artists} setFilteredArtistsByCategory = {setFilteredArtistsByCategory}/>
      <ArtistsGrid artists={filteredArtistsByCategory} scrollTopHeight={600}/>
    </Stack>
  )
}

export default CategorySearchGrid
