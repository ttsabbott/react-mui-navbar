//Profile.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Container from '@mui/material/Container';

const Profile = () => {
    const { user } = useAuth0();
    return (
        <Container>
            <img src={user.picture} alt="Profile" style={{ float: "right" }} />
            <p id="userName">Name: {user.name ? user.name : 'n/a'}</p>
            <p id="userNickname">Nickname: {user.nickname ? user.nickname : 'n/a'}</p>
            <p id="userGiven">Given Name: {user.given_name ? user.given_name : 'n/a'}</p>
            <p id="userFamily">Family Name: {user.family_name ? user.family_name : 'n/a'}</p>
            <p id="userEmail">Email: {user.email ? user.email : 'n/a'}</p>
            <p id="userSub">Sub: {user.sub ? user.sub : 'n/a'}</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </Container>
    );
};

export default Profile;
