import { useAuth0 } from '@auth0/auth0-react';
import Typography from '@mui/material/Typography';
import LogoutButton from '../components/LogoutButton';

const Logout = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <>
        <Typography>Logout - Authenticated</Typography>
        <LogoutButton />
      </>
    );
  }
};

export default Logout;
