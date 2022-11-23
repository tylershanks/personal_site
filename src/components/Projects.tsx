import React, { useState } from 'react';
import { Box, Card, CardActions, CardContent, CardHeader, Collapse, Divider, Typography } from '@mui/material'
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
        <Divider sx={{mb:3}}/>

        <Card sx={{bgcolor: '#607d8b', mx: 5}}>
            <CardHeader title='Cocktails.io'/>
                <CardContent>
                    <Typography>
                        Live Link
                    </Typography>
                    <Typography>
                        Github Link
                    </Typography>
                </CardContent>
            <CardActions disableSpacing>
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
                        This project was created as;ldkfngas;vas;hvasd;kjhvas;kjhjn;kasjdgjhasjkl;gas;lkjg jas;kljgfn jasd;kjljnasd;kljfjasd;lkjfasd;lkfjasd;lkfjasd;lkvnas;urghnba;ksjnar;kjg hnklajshdbfahlkjsbk;javh;ajwlhjg;ajlkwa;kjsnbva;jkshnga;kjsdhfgjna;kjsdhga;kjwsehgt;kas jgbn;aksjbnga;ksjdbvS:KJDhvsa'HF;WOAIqehfqw;jkophfaspkf;djvbnaspi; uvbasui;kvbZLKJ:NvbzlkjhgbaWSE;IPUGFTBASDLKNVBAi;upwghbS;KJBVAS;dki AS;KJVB;AKSJDHBNF;KJQWERBGAS;DIODUVHBN;KJEAR/,MBNGV;'OIAUSDHGBV;QER KU/JABG;ASKJDBG' 
                    </Typography>
                    <Typography>
                        Tools Used: 
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    </Box>
  )
}

export default Projects