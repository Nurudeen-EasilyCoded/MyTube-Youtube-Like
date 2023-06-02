import * as React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        width: { xs: '100%' },
        boxShadow: 'none',
        borderRadius: 0,
        marginBottom: '10px',
      }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component='img'
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ height: '100px', backgroundColor: '#F2F2F2' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography fontWeight='bold' fontSize='14px'>
            {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
          </Typography>
        </Link>
        <Link
          to={snippet.id?.channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography fontSize='12px' fontWeight='bold' color='gray'>
            {snippet?.channelTitle.slice(0, 50) ||
              demoChannelTitle.slice(0, 50)}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
