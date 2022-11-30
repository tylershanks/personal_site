import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, Paper, List, ListItem, Divider, Fade } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Fade in appear timeout={1000}>
        <Box 
            sx={{display: 'flex', flexDirection: 'column', py: 5, maxWidth: 'xl'}} width='100%'
            className='about'
            id='about'
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
    </Fade>
    )
}

export default About

{/* <Typography sx={{fontFamily: 'Montserrat', mx: 3, typography:{xl:'h1', lg:'h2', md:'h4'}}} align='left'> {/* h6 /}
                About
            </Typography>
            <Divider sx={{mb:3}}/>
            <Typography sx={{fontFamily: 'Montserrat', mx: 5, typography:{xl:'h3', lg:'h4', md:'h6'}}} align='left'> {/* h4 /}
                Hi, I am
            </Typography>
            <Typography sx={{fontFamily: 'Montserrat', mx: 5, fontWeight: 'bold', typography:{xl:'h3', lg:'h4', md:'h6'}}} align='left'> {/* h4 /}
                Tyler Shanks.
            </Typography>
            <Typography sx={{fontFamily: 'Montserrat', mx: 5, pt:3, typography:{xl:'h3', lg:'h4', md:'h6'}}} align='left'> {/* h6 /}
                Aspiring software developer with years of programming education as well as self-taught experience and personal
                projects. Graduated in 2019 with a B.S. in Mathematics and a minor in Computer Science before going into the
                Live Event Production field. Returned to software development through an online curriculum, looking to make a
                career change.
            </Typography> */}