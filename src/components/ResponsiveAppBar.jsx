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

const ResponsiveAppBar = ({ navPages, setNavPages }) => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const [selectedItem, setSelectedItem] = useState(() => {
        let foundSelected = navPages[0].title;
        navPages && navPages.forEach(navPage => {
            if (navPage.selected) {
                // console.log('found navPage selected: ' + navPage.title);
                foundSelected = navPage.title;
            }
        })
        // console.log('foundSelected=[' + foundSelected + ']');
        return foundSelected;
    });

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (event) => {
        const button = event.currentTarget;
        const buttonText = button.textContent;
        // console.log(buttonText);
        if (buttonText) {
            setSelectedItem(buttonText);
            navPages && navPages.forEach(navPage => {
                // console.log('before -> ' + JSON.stringify(navPage, null, 4));
                navPage.selected = (navPage.title === buttonText);
                // console.log('after --> ' + JSON.stringify(navPage, null, 4));
            });
            // console.log('before setNavPages -> ' + JSON.stringify(navPages, null, 4));
            localStorage.setItem('navPages', JSON.stringify(navPages));
        }
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="md">
                    <Toolbar disableGutters>

                        {/* NavBar with buttons when size >= medium */}
                        <Pets sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/" //"#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            A880TT
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="flex-end">
                            <>
                                {navPages && navPages.map((navPage) => {
                                    if (navPage.alwaysShow || (!navPage.showWhenSecure && !isAuthenticated) || (navPage.showWhenSecure && isAuthenticated))
                                        return (
                                            <Button
                                                key={navPage.title}
                                                onClick={handleCloseNavMenu}
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                                component={NavLink}
                                                to={navPage.link}
                                                variant={navPage.selected ? "contained" : "text"}
                                            // onClick={() => handleMenuItemClick("profile")}
                                            >
                                                {navPage.title}
                                            </Button>
                                        );
                                })}
                            </>
                        </Box>

                        {/* NavBar with menu list when size < medium */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="menu list of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {navPages && navPages.map((navPage) => {
                                    if (navPage.alwaysShow || (!navPage.showWhenSecure && !isAuthenticated) || (navPage.showWhenSecure && isAuthenticated))
                                        return (
                                            <MenuItem
                                                key={navPage.title}
                                                onClick={handleCloseNavMenu}
                                                component={NavLink}
                                                to={navPage.link}
                                                selected={navPage.selected}
                                            >
                                                <Typography sx={{ textAlign: 'center' }}>{navPage.title}</Typography>
                                            </MenuItem>
                                        );
                                })}
                            </Menu>
                        </Box>
                        <Pets sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/" //"#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            A880TT
                        </Typography>

                    </Toolbar>
                </Container>
            </AppBar>
            {/* <Typography variant='p'>{selectedItem}</Typography> */}
        </>
    );

}

export default ResponsiveAppBar;
