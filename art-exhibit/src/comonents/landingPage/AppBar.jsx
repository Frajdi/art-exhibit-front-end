import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";

const pages = ["Artists", "Category", "Commuity", "Portofolio"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  return (
    <Container maxWidth="xl">
      <Toolbar sx={{ mt: 2 }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            ml: 10,
            display: { xs: "none", md: "flex" },
            fontWeight: 700,
            fontFamily: "Poppins, sans-serif",
            fontSize: "25px",
            lineHeight: "37.5px",
            textDecoration: "none",
            color: "#C882FF",
          }}
        >
          ArtExhibit
        </Typography>
        <Stack
          spacing={7}
          direction={"row"}
          width={"60%"}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {pages.map((page) => (
            <Typography
              component="a"
              href="/"
              sx={{
                textDecoration: 'none',
                color: "#222222",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              {page}
            </Typography>
          ))}
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
              sx={{
                color: "#222222",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "30px",
              }}
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
              sx={{
                color: "#222222",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              Get Started
            </Typography>
          </Button>
        </Stack>
      </Toolbar>
    </Container>
  );
}
export default ResponsiveAppBar;
