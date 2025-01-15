import { useAuth0 } from '@auth0/auth0-react';
import Typography from '@mui/material/Typography';

const Home = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Typography>Home - Authenticated</Typography>;
  } else {
    return <Typography>Home - Not authenticated</Typography>;
  }
};

export default Home;
