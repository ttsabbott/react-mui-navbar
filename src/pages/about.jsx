import { useAuth0 } from '@auth0/auth0-react';
import Typography from '@mui/material/Typography';

const About = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Typography>About - Authenticated</Typography>;
  }
};

export default About;
