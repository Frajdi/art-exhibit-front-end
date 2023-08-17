import React from "react";
import Card from "./Card";
import Grid from "@mui/material/Grid";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import PowerOutlinedIcon from '@mui/icons-material/PowerOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';

const sectionData = [
    {
        title: "Artwork enquires",
        subtitle: "Track website enquiries all in one place so you never miss an opportunity.",
        icon: BrushOutlinedIcon
    },
    {
        title: "Quick and responsive",
        subtitle: "Our templates are automatically built to be fully responsive on all devices.",
        icon: DevicesOutlinedIcon
    },
    {
        title: "Multiple languages",
        subtitle: "Increase your global reach with easy multi-language management.",
        icon: TranslateOutlinedIcon
    },
    {
        title: "Online Viewing Rooms",
        subtitle: "Create time-sensitive online exhibitions and collect invaluable collector data.",
        icon: MeetingRoomOutlinedIcon
    },
    {
        title: "Platform integration",
        subtitle: "Build pages, track enquiries and online sales, all within a few clicks.",
        icon: PowerOutlinedIcon
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
        return <Grid key={item.title} item xs={4}>
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
