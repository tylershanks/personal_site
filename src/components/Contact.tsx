import { Box, Button, Divider, Link, Typography } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <Box 
        sx={{display: 'flex', flexDirection: 'column', py: 5, maxWidth: 'xl'}} width='100%'
        className='contact'
        id='contact'
    >
        <Typography sx={{fontFamily: 'Montserrat', mx: 3}} align='left' variant='h6'>
            Contact Me
        </Typography>
        <Divider sx={{mb:3}}/>

        <Typography sx={{fontFamily: 'Montserrat', mx: 5}} align='left' variant='h4'>
            I am currently open to all opportunities.
        </Typography>
        {/* <Typography sx={{fontFamily: 'Montserrat', mx: 5, pt:1}} align='left' variant='h6'>
            Email: tshanks530@gmail.com
        </Typography> */}
        <Box display='flex' flexWrap='wrap'>
            <Typography sx={{fontFamily: 'Montserrat', ml: 5, pt:1, flexWrap:'wrap'}} align='left' variant='h6'>
                Email: 
            </Typography>
            <Link href='mailto:tshanks530@gmail.com' target='_blank' sx={{fontFamily: 'Montserrat', ml: 1, pt:1}} align='left' variant='h6'>
                tshanks530@gmail.com
            </Link>
        </Box>
        <Typography sx={{fontFamily: 'Montserrat', mx: 5, pt:1}} align='left' variant='h6'>
            LinkedIn: 
            <Link href='https://www.linkedin.com/in/tyler-shanks/' target='_blank' sx={{fontFamily: 'Montserrat', ml: 1, pt:1}} align='left' variant='h6'>
                Tyler-Shanks
            </Link>
        </Typography>
        <Box display='flex' flexWrap='wrap'>
            <Typography sx={{fontFamily: 'Montserrat', ml: 5, pt:1}} align='left' variant='h6'>
                GitHub: 
            </Typography>
            <Link href='https://github.com/tylershanks' target='_blank' sx={{fontFamily: 'Montserrat', ml: 1, pt:1}} align='left' variant='h6'>
                TylerShanks
            </Link>
        </Box>
    </Box>
  )
}

export default Contact