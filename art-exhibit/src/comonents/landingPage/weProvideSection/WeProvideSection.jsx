import React from "react";
import Card from "./Card";
import Grid from "@mui/material/Grid";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import CollectionsIcon from '@mui/icons-material/Collections';

const sectionData = [
    {
        title: "Artwork enquires",
        subtitle: "Track website enquiries all in one place so you never miss an opportunity.",
        icon: BrushOutlinedIcon
    },
    {
        title: "Quick and responsive",
        subtitle: "Our templates are automatically built on to be fully responsive.",
        icon: DevicesOutlinedIcon
    },
    {
        title: "Online Art Collection",
        subtitle: "Create online collections of best artworks on the platform.",
        icon: CollectionsIcon
    },
    {
        title: "Advanced SEO tools",
        subtitle: "Maximise your prominence among search results with powerful SEO tools.",
        icon: ConstructionOutlinedIcon
    },
]

const WeProvideSection = () => {
  return (
    <Grid spacing={10} container>
    {sectionData.map(item => {
        return <Grid key={item.title} item xs={6}>
        <Card
          title={item.title}
          subtitle={item.subtitle}
          Icon={item.icon}
        />
      </Grid>
    })}
      
    </Grid>
  );
};

export default WeProvideSection;
