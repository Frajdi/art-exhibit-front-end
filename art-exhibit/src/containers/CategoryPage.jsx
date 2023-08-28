import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AppBarMenu from "../comonents/landingPage/AppBar";
import Footer from "../comonents/landingPage/Footer";
import TextAnimation from "../animationUtils/TextAnimation";
import CategorySearchGrid from "../comonents/categoryPage/CategorySearchGrid";

const signitureStyles = {
  textDecoration: "none",
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "30px",
  opacity: 0.5,
};

const signitureNameStyles = {
  ...signitureStyles,
  opacity: 1,
};

const CategoryPage = () => {
  return (
    <Grid container sx={{ backgroundColor: "#FFFFFF" }}>
      <Grid item xs={12}>
        <AppBarMenu color="#FFFFFF" />
      </Grid>
      <Grid item xs={12} padding={"8rem 8rem 0 8rem"}>
        <CategorySearchGrid />
      </Grid>
      <Grid
        item
        xs={12}
        padding={"4rem 8rem 0 8rem"}
        sx={{ backgroundColor: "#FFFFFF" }}
      >
        <Footer />
      </Grid>
      <Grid
        item
        xs={12}
        padding={"3rem 8rem 4rem 8rem"}
        sx={{ backgroundColor: "#FFFFFF" }}
      >
        <Stack alignItems={"center"}>
          <TextAnimation color={"#c786ff"}>
            <Typography style={signitureStyles}>
              Created by{" "}
              <Typography component="span" style={signitureNameStyles}>
                Denisa
              </Typography>{" "}
              | All Right Reserved!
            </Typography>
          </TextAnimation>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CategoryPage;
