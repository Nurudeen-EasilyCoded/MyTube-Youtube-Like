import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchApi } from '../utils/fetechApi';

const ChannelDetail = () => {
  const [channeldetail, setChanneldetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChanneldetail(data?.items[0])
    );

    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box>
      <Box>
        <div
          style={{
            background:
              'linear-gradient(263deg, rgba(5,29,24,1) 0%, rgba(26,32,108,0.908000700280112) 50%, rgba(49,4,62,1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          sx={{ marginTop: '-100px' }}>
          <ChannelCard channelDetail={channeldetail} />
        </Box>
      </Box>
      <Box m='10px' sx={{}}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
