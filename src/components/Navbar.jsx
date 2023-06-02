import * as React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import MuiAppBar from '@mui/material/AppBar';
import { Box, Toolbar, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import { styled } from '@mui/material/styles';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: '#000',
}));

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' top='0' elevation={0}>
        <Toolbar>
          <Link to='/' style={{ marginRight: '10px', display: 'flex' }}>
            <img src={logo} alt='logo' height={45} />
            <Typography
              fontWeight='bold'
              color='white'
              variant='h5'
              noWrap
              sx={{ ml: 2, mt: 1, display: { xs: 'none', sm: 'block' } }}>
              MyTube
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
