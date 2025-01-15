import { useAuth0 } from '@auth0/auth0-react';
import Typography from '@mui/material/Typography';
import LoginButton from '../components/LoginButton';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <>
        <Typography>Login - Not authenticated</Typography>
        <LoginButton />
      </>
    );
  }
};

export default Login;
