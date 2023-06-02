import React from 'react';
import { Box, Typography, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/system';
import { categories } from '../utils/constants';

const CustomTab = styled(Tab)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: 0,
  color: '#fff',
}));

const MobileNav = ({ selectedCategory, setSelectedCategory }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!categories) return <Typography color='#fff'>Loading...</Typography>;

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons='auto'
        TabIndicatorProps={{ style: { display: 'none' } }}
        aria-label='scrollable auto tabs example'
        sx={{ backgroundColor: '#000' }}>
        {categories?.map((category, index) => (
          <CustomTab
            key={index}
            label={
              <React.Fragment>
                <Typography
                  sx={{
                    color:
                      category.name === selectedCategory ? '#fff' : '#FC1503',
                    fontSize: '12px',
                  }}>
                  <span>{category.icon}</span>
                </Typography>
                <Typography
                  sx={{
                    backgroundColor:
                      category.name === selectedCategory && '#FC1503',
                    fontSize: '13px',
                    textTransform: 'capitalize',
                  }}>
                  {category.name}
                </Typography>
              </React.Fragment>
            }
            onClick={() => setSelectedCategory(category.name)}
            className='category-btn'
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default MobileNav;
