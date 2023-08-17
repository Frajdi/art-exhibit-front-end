import React from 'react'
import Card from './Card'
import Grid from '@mui/material/Grid'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';

const WeProvideSection = () => {
  return (
    <Grid container>
    <Grid item xs={4}>
    <Card title={'Artwork enquires'} subtitle={'Track website enquiries all in one place so you never miss an opportunity.'} Icon={BrushOutlinedIcon}/>

    </Grid>
    </Grid>
  )
}

export default WeProvideSection
