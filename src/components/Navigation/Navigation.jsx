import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

// const navItems = ['contacts', 'login', 'register'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const drawerWidth = 240;

export const Navigation = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { isLoggedIn, user } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
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
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search contact…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
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
                  label={user.name}
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
