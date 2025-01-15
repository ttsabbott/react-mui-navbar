import { useAuth0 } from '@auth0/auth0-react';
import Typography from '@mui/material/Typography';

const Faq = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Typography>FAQ - Authenticated</Typography>;
  }
};

export default Faq;
