import React, { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Collapse, Divider, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


function Projects() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    

  return (
    <Box 
        sx={{display: 'flex', flexDirection: 'column', py: 5, maxWidth: 'md'}} width='100%'
    >
        <Typography sx={{fontFamily: 'Montserrat', mx: 3}} align='left' variant='h6'>
            Projects
        </Typography>
        <Divider />
        {/* box with all the projects individually */}
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',}}>
            <Card sx={{bgcolor: '#607d8b', mx: 5, my: 5, width: 345}}>
                <CardHeader
                    title='Cocktails.io' 
                    subheader="Personal Project"
                    sx={{pb: 0}} titleTypographyProps={{variant:'h6' }}
                />
                    <CardContent>
                        <Typography variant="body2">
                            Fullstack CRUD Application    
                        </Typography>
                    </CardContent>
                    <Divider sx={{mb:0}}/>
                    <CardActions disableSpacing sx={{flexWrap: 'wrap'}}>
                        <Button size="small" color='inherit'>GitHub</Button>
                        <Button size="small" color='inherit'>Demo</Button>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography>
                            Fullstack CRUD application designed to facilitate drink lookups and provide a means to document and save new recipes for bartenders. This application is fully mobile responsive, making it ideal for use behind a bar.  
                        </Typography>
                        <Divider />
                        <Typography>
                            Tools Used: JavaScript, React, Node, Express, MondoDB, Mongoose, MongoDB Atlas, RESTful APIs, Redux, Google OAuth, Webpack, MaterialUI
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

            <Card sx={{bgcolor: '#607d8b', mx: 5, width: 345}}>
                <CardHeader
                    title='Weather Melodies' 
                    subheader="Personal Project"
                    sx={{pb: 0}} titleTypographyProps={{variant:'h6' }}
                />
                    <CardContent>
                        <Typography variant="body2">
                            Spotify API Integration    
                        </Typography>
                    </CardContent>
                    <Divider sx={{mb:0}}/>
                    <CardActions disableSpacing sx={{flexWrap: 'wrap'}}>
                        <Button size="small" color='inherit'>GitHub</Button>
                        <Button size="small" color='inherit'>Demo</Button>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography>
                            Look up weather and recieve a matching playlist.  
                        </Typography>
                        <Divider />
                        <Typography>
                            Tools Used: JavaScript, React
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

            <Card sx={{bgcolor: '#607d8b', mx: 5, my: 5, width: 345}}>
                <CardHeader
                    title='Portfolio Website' 
                    subheader="Personal Project"
                    sx={{pb: 0}} titleTypographyProps={{variant:'h6' }}
                />
                    <CardContent>
                        <Typography variant="body2">
                            AWS Hosted Application    
                        </Typography>
                    </CardContent>
                    <Divider sx={{mb:0}}/>
                    <CardActions disableSpacing sx={{flexWrap: 'wrap'}}>
                        <Button size="small" color='inherit'>GitHub</Button>
                        <Button size="small" color='inherit'>Demo</Button>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography>
                            Look up weather and recieve a matching playlist.  
                        </Typography>
                        <Divider />
                        <Typography>
                            Tools Used: JavaScript, React
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Box>
    </Box>
  )
}

export default Projects