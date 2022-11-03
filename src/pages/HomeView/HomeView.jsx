import { Box, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';

export const HomeView = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <Box>
      {!isLoggedIn && (
        <Typography variant="h2">
          Welcome to ContactsApp! Please login or register to use app
        </Typography>
      )}

      {isLoggedIn && (
        <Typography variant="h2">
          {user.name} welcome to ContactsApp!
        </Typography>
      )}
    </Box>
  );
};
