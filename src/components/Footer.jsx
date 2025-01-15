import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Pets from '@mui/icons-material/Pets';

const Footer = () => {
    return (
        <>
            <AppBar position='fixed' color='info' sx={{ top: 'auto', bottom: 0, }}>
                <Container>
                    <Toolbar disableGutters variant='dense' sx={{ justifyContent: 'center', }}>
                        <Typography variant='caption'>Copyright&copy;2025</Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default Footer;
