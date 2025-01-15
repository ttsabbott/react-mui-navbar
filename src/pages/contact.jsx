import { useAuth0 } from '@auth0/auth0-react';
import Typography from '@mui/material/Typography';

const Contact = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Typography>Contact - Authenticated</Typography>;
  }
};

export default Contact;
