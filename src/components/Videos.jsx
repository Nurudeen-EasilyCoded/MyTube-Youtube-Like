import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { VideoCard, ChannelCard } from './';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Typography color='#fff'>Loading...</Typography>;
  return (
    <Box sx={{ mt: '20px', width: '100%' }}>
      <Grid
        container
        direction={direction || 'row'}
        justifyContent='center'
        alignItems='center'
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {videos.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Grid>
        ))}
        <Grid item xs={12} sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Typography
            color='gray'
            fontSize='11px'
            m='10px'
            textAlign='center'>
            Built by{' '}
            <a
              href='https://everythingcoded.com'
              target='_blank'
              style={{ color: 'cyan', textDecoration: 'none' }}>
              Nurudeen
            </a>{' '}
            inspired by JSM | RapidApi <br />
            &mdash; <br />
            <span style={{ fontSize: '10px' }}>Copyright 2023 MyTube</span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Videos;
