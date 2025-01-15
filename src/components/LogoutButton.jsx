//LogoutButton.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import Button from '@mui/material/Button';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        return (
            <>
                <Button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    variant='contained'
                    color='error'
                >Log Out</Button>
                <br />
                <Profile />
            </>
        );
    } else {
        return <></>;
    }
};

export default LogoutButton;
