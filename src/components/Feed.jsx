import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { Videos, Sidebar } from './';
import { fetchApi } from '../utils/fetechApi';
import MobileNav from './MobileNav';

const drawerWidth = 190;

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('New');
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#000',
              borderRight: '1px solid #3d3d3d',
              color: '#fff',
            },
          }}
          open>
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography color='gray' fontSize='11px' m='10px' textAlign='center'>
            Built by{' '}
            <a
              href='https://everythingcoded.com'
              target='_blank'
              style={{ color: 'cyan', textDecoration: 'none' }}>
              Nurudeen
            </a>{' '}
            <br />
            inspired by JSM | RapidApi <br />
            &mdash; <br />
            <span style={{ fontSize: '10px' }}>Copyright 2023 MyTube</span>
          </Typography>
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          border: 'none',
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginTop: { xs: '120px', sm: '50px' },
          position: 'relative',
        }}>
        <Box
          sx={{
            display: { xs: 'flex', sm: 'none' },
            width: '346px',
            marginBottom: '15px',
            overflowX: 'auto',
            position: 'fixed',
            top: '50px',
            left: '23px',
          }}>
          <MobileNav
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Box>
        <Typography variant='h4' color='white' fontWeight='bold'>
          {selectedCategory} <span style={{ color: '#f31503' }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default Feed;
