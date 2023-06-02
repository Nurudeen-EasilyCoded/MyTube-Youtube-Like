import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Videos } from './';
import { useParams } from 'react-router-dom';
import { fetchApi } from '../utils/fetechApi';

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerm}}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        mt='50px'
        component='main'
        sx={{
          border: 'none',
          flexGrow: 1,
          p: 3,
        }}>
        <Typography variant='h4' color='white' fontWeight='bold'>
          Search Results for:{' '}
          <span style={{ color: '#f31503' }}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
