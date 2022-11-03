import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Link } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const drawerWidth = 240;

export const Navigation = props => {
  const dispatch = useDispatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { isLoggedIn, user } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleLogOut = () => {
    dispatch(logOut());
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              textTransform: 'uppercase',
            }}
          >
            <Link
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'white',
              }}
            >
              Phonebook
            </Link>
          </Typography>

          {!isLoggedIn && (
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }}>
                <Link
                  component={RouterLink}
                  to={`/login`}
                  sx={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  login
                </Link>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Link
                  component={RouterLink}
                  to={`/register`}
                  sx={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  register
                </Link>
              </Button>
            </Box>
          )}
          {isLoggedIn && (
            <>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button sx={{ color: '#fff' }}>
                  <Link
                    component={RouterLink}
                    to={`/contacts`}
                    sx={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                  >
                    contacts
                  </Link>
                </Button>
                <Chip
                  avatar={<Avatar>{user.name[0]}</Avatar>}
                  label={user.email}
                ></Chip>
                <Button sx={{ color: '#fff' }} onClick={handleLogOut}>
                  Logout
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {/* {drawer} */}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
};
