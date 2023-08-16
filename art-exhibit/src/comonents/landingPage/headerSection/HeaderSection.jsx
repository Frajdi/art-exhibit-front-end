import React from 'react'
import ImageGroup from './ImageGroup'
import TextAnimation from '../../../animationUtils/TextAnimation'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'


const titleStyles = {
  textDecoration: 'none',
  color: "#222222",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "50px",
  lineHeight: "75px"
}

const subtitleStyles = {
  ...titleStyles, 
  fontSize: '25px',
  lineHeight: '37.5px'
}

const buttonStyles = 
  {
    backgroundColor: "#C786FF",
    color: "black",
    borderRadius: "50px",
    padding: "10px 20px",
    textTransform: "none",
    width: '40%'
}

const buttonTextStyles ={
  ...titleStyles,
  fontSize: '20px',
  lineHeight: '30px'
}

const HeaderSection = () => {
  return (
    <Grid container padding={'4rem 8rem'}>
      <Grid item xs={6}>
      <Stack spacing={5} direction={'column'}   width={'85%'}>
      <TextAnimation>
        <Typography style={titleStyles}>
          Where creativity meets innovation, and every portofolio tells a story
        </Typography>
        </TextAnimation>
        <TextAnimation>
        <Typography style={subtitleStyles}>
          Manage and grow your art business
        </Typography>
        </TextAnimation>
        <Button style={buttonStyles}>
        <Typography style={buttonTextStyles}>
          Discover More
          </Typography>
        </Button>
        </Stack>
      </Grid>
      <Grid item xs={6}>
      <ImageGroup />
      </Grid>
    </Grid>
  )
}

export default HeaderSection
