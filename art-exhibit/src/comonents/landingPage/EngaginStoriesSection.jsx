import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextAnimation from "../../animationUtils/TextAnimation";

const contentLines = [
  "Design captivating online galleries and weave tales around each",
  "masterpiece. Illuminate the journeys of your artists through immersive",
  "techniques. Stay updated with curated news sections and art event",
  "highlights, bridging the gap with enthusiasts and new collectors globally.",
];

   

const titleStyles = {
  textDecoration: "none",
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "60px",
  lineHeight: "76.8px",
};

const contentStyles = {
  ...titleStyles,
  fontWeight: "400px",
  fontSize: "16px",
  lineHeight: "25.6px",
};


const imageStyles = {
    width: '411.6px',
    height: '504px',
    borderRadius: '5px'
}

const EngaginStoriesSection = () => {
  return (
    <Grid container spacing={25}>
      <Grid item xs={5}>
      <Stack alignItems={'flex-start'}>
        <img style={imageStyles} src="https://www.indiaart.com/Paintings/18951/large/24768.jpg.ashx?height=350"></img>
        </Stack>
      </Grid>
      <Grid item xs={7}>
        <Stack spacing={4} height={'100%'} justifyContent={'center'} alignItems={'flex-start'}>
          <Stack>
            <TextAnimation color={"#C786FF"}>
              <Typography style={titleStyles}>Tell engaging stories</Typography>
            </TextAnimation>
          </Stack>
          <Stack>
            {contentLines.map((item) => (
              <TextAnimation color={"#C786FF"}>
                <Typography style={contentStyles}>{item}</Typography>
              </TextAnimation>
            ))}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default EngaginStoriesSection;
