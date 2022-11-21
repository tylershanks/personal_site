import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import './Navbar.css';
import { IconButton, AppBar, Toolbar, Typography, Box, Stack, Button, Hidden, SwipeableDrawer, Divider, autocompleteClasses } from '@mui/material';
import SpokeIcon from '@mui/icons-material/Spoke';
import LanguageIcon from '@mui/icons-material/Language';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <LanguageIcon></LanguageIcon>
                    {/* <SpokeIcon></SpokeIcon>
                    <LensBlurIcon></LensBlurIcon> */}
                </IconButton>
                <Typography
                    variant="h4"
                    sx={{
                        flexGrow: 1,
                        mr: 2,
                        display: 'flex',
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                    }}
                >
                    Tyler Shanks
                </Typography>
                <Hidden smDown>
                    <Stack direction='row' spacing={2}>
                        <Button color='inherit'>about</Button>
                        <Button color='inherit'>projects</Button>
                        <Button color='inherit'>contact</Button>
                    </Stack>
                </ Hidden>
                <Hidden smUp>
                <IconButton onClick={() => setOpen(true)}>
                    <MenuIcon></MenuIcon>
                </IconButton>
                </ Hidden>
            </Toolbar>
            <SwipeableDrawer
                anchor="right"
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                sx={{color: 'green'}}
                PaperProps={{
                    sx: {
                    backgroundColor: "#FFF8EA"
                    }
                }}>
                    <Box>
                        <div
                            onClick={() => setOpen(false)}
                            onKeyPress={() => setOpen(false)}
                            role="button"
                            tabIndex={0}
                        >
                            <IconButton>
                                <ChevronRightIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <Stack direction='column' spacing={1} margin={3}>
                            <Button color='inherit'>about</Button>
                            <Button color='inherit'>projects</Button>
                            <Button color='inherit'>contact</Button>
                        </Stack>

                    </Box>
            </SwipeableDrawer>
        </AppBar>
    );
}

export default Navbar;