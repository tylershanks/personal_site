import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, Paper, List, ListItem, Divider } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Box 
        sx={{display: 'flex', flexDirection: 'column', py: 5, maxWidth: 'md'}} width='100%'
    >
        <Typography sx={{fontFamily: 'Montserrat', mx: 3}} align='left' variant='h6'>
            About
        </Typography>
        <Divider sx={{mb:3}}/>
        <Typography sx={{fontFamily: 'Montserrat', mx: 5}} align='left' variant='h4'>
            Hi, I am
        </Typography>
        <Typography sx={{fontFamily: 'Montserrat', mx: 5, fontWeight: 'bold'}} align='left' variant='h4'>
            Tyler Shanks.
        </Typography>
        <Typography sx={{fontFamily: 'Montserrat', mx: 5, pt:3}} align='left' variant='h6'>Aspiring software developer with years of programming education as well as self-taught experience and personal
            projects. Graduated in 2019 with a B.S. in Mathematics and a minor in Computer Science before going into the
            Live Event Production field. Returned to software development through an online curriculum, looking to make a
            career change.
        </Typography>
    </Box>
    )
}

export default About