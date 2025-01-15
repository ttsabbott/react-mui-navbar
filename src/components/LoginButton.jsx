//LoginButton.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
        return (
            <>
                <Button
                    onClick={() => loginWithRedirect()}
                    variant='contained'
                    color='success'
                >Log In</Button>
            </>
        );
    } else {
        return <></>;
    }
};

export default LoginButton;
