import * as React from 'react';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const ChannelCard = ({ channelDetail }) => {
  if (!channelDetail) return <Typography color='#fff'>Loading...</Typography>;
  
  return (
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <Box
        sx={{
          maxWidth: 345,
          width: { xs: '100%' },
          boxShadow: 'none',
          borderRadius: '20px',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // width: { xs: '356px', md: '320px'},
          // height: '326px',
          // margin: 'auto',
        }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
          }}>
          <CardMedia
            component='img'
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px' }}
          />
          <Typography variant='h5'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          <br />
          {channelDetail?.statistics?.subscriberCount && (
            <Typography variant='body2'>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{' '}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Box>
    </Link>
  );
};

export default ChannelCard;
