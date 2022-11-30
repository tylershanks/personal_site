import React, { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Collapse, Divider, Fade, Icon, List, ListItem, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
    expand: string;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


function Projects() {
    const [expanded, setExpanded] = React.useState('none');

    // const handleExpandClick = (i: boolean | ((prevState: boolean) => boolean)) => {
    //     setExpanded(expanded === i ? false : i);
    // };

    const handleExpandClick = (i: any) => {
        setExpanded(expanded === i ? "false" : i);
    };
    

  return (
    <Fade in appear timeout={1000}>
        <Box 
            sx={{display: 'flex', flexDirection: 'column', py: 5, maxWidth: 'xl'}} width='100%'
            className='projects'
            id='projects'
        >
            <Typography sx={{fontFamily: 'Montserrat', mx: 3}} align='left' variant='h6'>
                Projects
            </Typography>
            <Divider />
            {/* box with all the projects individually */}
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start',}}>
                <Card sx={{bgcolor: '#607d8b', mx: 5, my: 5, width: 650}}>
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
                                <Typography>
                                    |    
                                </Typography>
                            <Button size="small" color='inherit'>Live Demo</Button>
                            <ExpandMore
                                expand={expanded ? expanded : 'no'}
                                onClick={() => handleExpandClick('cocktails')}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>

                    <Divider sx={{mb:0}}/>
                    <Collapse in={expanded === 'cocktails'} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Box display='flex' flexDirection='column'>
                            <Box display='flex' flexDirection='row' sx={{flexWrap: 'wrap'}}>
                                <Box width={{xs: '100%', sm: '50%'}}>
                                    <Typography sx={{pb: 2, fontWeight: 'bold'}} align='left'>
                                        Description  
                                    </Typography>
                                    <Typography sx={{pb: 2, pr: 2}} align='left'>
                                        Fullstack CRUD application designed to facilitate drink lookups and provide a means to document and  
                                    </Typography>
                                </Box>
                                <Box width={{xs: '100%', sm: '50%'}}>
                                    <Typography sx={{pb: 2, fontWeight: 'bold'}} align='left'>
                                        Challenges  
                                    </Typography>
                                    <Typography sx={{pb: 2}} align='left'>
                                        first full stack app blah blah blah blah blah blah blah blah blah blah hereisabiggerwordforthebox  
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{mb:2}}>
                                <Typography sx={{fontWeight: 'bold'}} align='left'>
                                    Notable Features  
                                </Typography>
                                <Box width='100%' display='flex' sx={{flexWrap: 'wrap'}}>
                                    <Box display='flex' width={{xs: '100%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>View all of the publicly available drinks in the database efficiently.</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>Pagination, incresing readability</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>Fully functioning search feature</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>Create your own account</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>Google OAuth</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>Create, update, and delete your own drinks</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>Like other public drinks</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>Fully mobile responsive</Typography>
                                    </Box>
                                    {/* JavaScript, React, Node, Express, MondoDB, Mongoose, MongoDB Atlas, RESTful APIs, Redux, Google OAuth, Webpack, MaterialUI   */}
                                </Box>
                            </Box>

                            <Box>
                                <Typography sx={{fontWeight: 'bold'}} align='left'>
                                    Technologies Used  
                                </Typography>
                                <Box width='100%' display='flex' sx={{flexWrap: 'wrap'}}>
                                    <Box display='flex' width={{xs: '100%', sm: '50%', md:'33%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>Javascript</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%', sm: '50%', md:'33%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>React</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%', sm: '50%', md:'33%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>Node</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%', sm: '50%', md:'33%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>Express</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%', sm: '50%', md:'33%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>MondoDB</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%', sm: '50%', md:'33%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>Mongoose</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%', sm: '50%', md:'33%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>RESTful APIs</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%', sm: '50%', md:'33%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>Redux</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%', sm: '50%', md:'33%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>Google OAuth</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%', sm: '50%', md:'33%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>Webpack</Typography>
                                    </Box>
                                    <Box display='flex' width={{xs: '100%', sm: '50%', md:'33%'}} alignItems='center'>
                                            <Typography>•</Typography>
                                        <Typography sx={{px: 1}}>MaterialUI</Typography>
                                    </Box>
                                    {/* JavaScript, React, Node, Express, MondoDB, Mongoose, MongoDB Atlas, RESTful APIs, Redux, Google OAuth, Webpack, MaterialUI   */}
                                </Box>
                            </Box>
                        </Box>
                        </CardContent>
                    </Collapse>


                    {/* <Collapse in={expanded === 'cocktails'} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography sx={{pb: 2}}>
                                Fullstack CRUD application designed to facilitate drink lookups and provide a means to document and save new recipes for bartenders. This application is fully mobile responsive, making it ideal for use behind a bar.  
                            </Typography>
                            <Divider variant="middle" />
                            <Typography sx={{pt: 2}}>
                                Tools Used: JavaScript, React, Node, Express, MondoDB, Mongoose, MongoDB Atlas, RESTful APIs, Redux, Google OAuth, Webpack, MaterialUI
                            </Typography>
                        </CardContent>
                    </Collapse> */}
                </Card>

                <Card sx={{bgcolor: '#607d8b', mx: 5, my: 5, width: 650}}>
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
                                expand={expanded ? expanded : 'no'}
                                onClick={() => handleExpandClick('weather')}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>

                    <Collapse in={expanded === 'weather'} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography sx={{pb: 2}}>
                                Look up weather and recieve a matching playlist.
                            </Typography>
                            <Divider variant="middle" />
                            <Typography sx={{pt: 2}}>
                                Tools Used: JavaScript, React
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>

                <Card sx={{bgcolor: '#607d8b', mx: 5, my: 5, width: 650}}>
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
                                expand={expanded ? expanded : 'no'}
                                onClick={() => handleExpandClick('personalSite')}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>

                    <Collapse in={expanded === 'personalSite'} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography sx={{pb: 2}}>
                                This website you are currently viewing!
                            </Typography>
                            <Divider variant="middle" />
                            <Typography sx={{pt: 2}}>
                                Tools Used: TypeScript, React, MaterialUI, Amazon AWS
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>

                {/* 

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
                                onClick={() => handleExpandClick(true)}
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
                </Card> */}
            </Box>
        </Box>
    </Fade>
  )
}

export default Projects