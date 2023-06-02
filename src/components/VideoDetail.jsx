import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Box, Typography, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Videos } from './';
import { fetchApi } from '../utils/fetechApi';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet)
    return <Typography color='#fff'>Loading...</Typography>;

  return (
    <Box>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
            />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              py={1}
              px={2}
              sx={{ color: '#fff' }}>
              <Link>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color='#fff'>
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videoDetail?.statistics?.viewCount
                  ).toLocaleString()}{' '}
                  views
                </Typography>
                <Typography>
                  {parseInt(
                    videoDetail?.statistics?.likeCount
                  ).toLocaleString()}{' '}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* Related Videos */}
        <Box
          mt='60px'
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent='center'
          alignItems='center'>
          <Typography variant='h4' color='white' fontWeight='bold'>
            <span style={{ color: '#f31503' }}>Related</span> videos
          </Typography>
          <Videos videos={relatedVideos} direction='column' />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
