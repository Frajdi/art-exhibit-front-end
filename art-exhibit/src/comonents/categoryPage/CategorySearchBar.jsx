import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const categoryOptions = [
  { value: "ARCHITECTURE", label: "Architecture" },
  { value: "CALLIGRAPHY", label: "Calligraphy" },
  { value: "CINEMATOGRAPHY", label: "Cinematography" },
  { value: "DANCE", label: "Dance" },
  { value: "DESIGNER", label: "Designer" },
  { value: "DRAWING", label: "Drawing" },
  { value: "FILM", label: "Film" },
  { value: "MUSIC", label: "Music" },
  { value: "PAINTING", label: "Painting" },
  { value: "PHOTOGRAPHY", label: "Photography" },
  { value: "SCULPTURE", label: "Sculpture" },
  { value: "PERFORMING", label: "Performing" },
  { value: "ARTS", label: "Arts" },
  { value: "POTTERY", label: "Pottery" },
  { value: "PRINTMAKING", label: "Printmaking" },
  { value: "WRITING", label: "Writing" },
  { value: "ART_COLLECTOR", label: "Art Collector" },
];

const titleStyles = {
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "40px",
  lineHeight: "60px",
  margin: 3,
};

const searchStyles = {
  width: "384px",
  height: "50px",
  borderRadius: "10px",
  backgroundColor: "rgba(89, 89, 89, 0.1)",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "30px",
};

const buttonStyles = {
  width: "250px",
  height: "55px",
  borderRadius: "10px",
  border: "2px solid #DEC1F9",
  textTransform: "none",
};

const buttonTextStyles = {
  ...titleStyles,
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "30px",
  margin: 0,
};

const extraButtonStyles = {
  width: "140px",
  height: "55px",
  borderRadius: "100px",
  background: "#E7DEEF",
  textTransform: "none",
  margin: "5rem",
};

const gridItemStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: 0,
};

const CategorySearchBar = ({ artists, setFilteredArtistsByCategory }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categoryOptions);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allCategoriesShown, setAllCategoriesShown] = useState(false);

  useEffect(() => {
    const filteredArtists = categoryOptions.filter((option) => {
      return option.value.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredCategories(filteredArtists);
  }, [searchValue]);

  useEffect(() => {
    const filteredArtists = artists.filter((artist) => {
      // console.log(artist.category, selectedCategory);
      return artist.category === selectedCategory;
    });
    console.log({filteredArtists});
    if (selectedCategory) {
      setFilteredArtistsByCategory(filteredArtists);
    } else {
      setFilteredArtistsByCategory(artists);
    }
  }, [selectedCategory]);

  return (
    <Stack width={"100%"} alignItems={"center"} spacing={2}>
      <Typography style={titleStyles}>Category</Typography>
      <OutlinedInput
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
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
      <Grid container style={{ marginTop: "4rem" }} spacing={4}>
        <AnimatePresence mode="wait" initial={false}>
          {filteredCategories.map((category, i) => {
            if (!allCategoriesShown) {
              if (i > 5) return;
            }
            return (
              <Grid
                item
                xs={4}
                key={category.value}
                style={gridItemStyles}
                component={motion.div}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  onClick={() => {
                    selectedCategory !== category.value
                      ? setSelectedCategory(category.value)
                      : setSelectedCategory(null);
                  }}
                  style={{
                    ...buttonStyles,
                    background:
                      selectedCategory === category.value
                        ? "linear-gradient(to right, #671AE4, #B75CFF)"
                        : "#FFFFFF",
                  }}
                  variant={
                    selectedCategory === category.value
                      ? "contained"
                      : "outlined"
                  }
                >
                  <Typography
                    style={{
                      ...buttonTextStyles,
                      color:
                        selectedCategory === category.value
                          ? "#FFFFFF"
                          : "#222222",
                    }}
                  >
                    {category.label}
                  </Typography>
                </Button>
              </Grid>
            );
          })}
        </AnimatePresence>
      </Grid>
      <Button
        onClick={() => {
          setAllCategoriesShown((prev) => !prev);
        }}
        variant="contained"
        style={extraButtonStyles}
      >
        <Typography style={buttonTextStyles}>
          {allCategoriesShown ? "Less" : "More"}
        </Typography>
      </Button>
    </Stack>
  );
};

export default CategorySearchBar;
