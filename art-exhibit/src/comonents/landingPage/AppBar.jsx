import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import CategoryMenu from "./CategoryMenu";

const logoTitleStyles = {
  mr: 2,
  ml: 10,
  display: { xs: "none", md: "flex" },
  fontWeight: 700,
  fontFamily: "Poppins, sans-serif",
  fontSize: "25px",
  lineHeight: "37.5px",
  textDecoration: "none",
  color: "#C882FF",
}

const menuOptionsStyles = {
  textDecoration: 'none',
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "30px"
}

const AppBarMenu = () => {
  return (
    <Container maxWidth="xl">
      <Toolbar sx={{ mt: 2 }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={logoTitleStyles}
        >
          ArtExhibit
        </Typography>
        <Stack
          spacing={7}
          direction={"row"}
          width={"60%"}
          sx={{ display: "flex", justifyContent: "center" }}
        >
            <Typography
              component="a"
              href="/"
              sx={menuOptionsStyles}
            >
              Artists
            </Typography>
            <CategoryMenu typographyStyles={menuOptionsStyles}/>
            <Typography
              component="a"
              href="/"
              sx={menuOptionsStyles}
            >
              Commuity
            </Typography>
            <Typography
              component="a"
              href="/"
              sx={menuOptionsStyles}
            >
              Portofolio
            </Typography>
        </Stack>

        <Stack
          direction={"row"}
          spacing={3}
          sx={{ padding: "20px", width: "20%", justifyContent: "flex-end" }}
        >
          <Button
            style={{
              backgroundColor: "#C786FF",
              color: "black",
              borderRadius: "50px",
              padding: "10px 20px",
              textTransform: "none",
            }}
          >
            <Typography
              sx={menuOptionsStyles}
            >
              Log In
            </Typography>
          </Button>
          <Button
            style={{
              backgroundColor: "#EBD4FF",
              color: "black",
              borderRadius: "50px",
              padding: "0px 20px",
              textTransform: "none",
            }}
          >
            <Typography
              sx={menuOptionsStyles}
            >
              Get Started
            </Typography>
          </Button>
        </Stack>
      </Toolbar>
    </Container>
  );
}
export default AppBarMenu;
