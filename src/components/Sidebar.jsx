import React from 'react';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { categories } from '../utils/constants';
import { Toolbar } from '@mui/material';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Box sx={{ height: '90vh', overflowY: 'auto' }}>
      <Toolbar />
      <Divider />
      <List>
        {categories.map((category, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              className='category-btn'
              onClick={() => setSelectedCategory(category.name)}
              sx={{
                backgroundColor:
                  category.name === selectedCategory && '#FC1503',
              }}>
              <ListItemIcon
                sx={{
                  color:
                    category.name === selectedCategory ? '#fff' : '#FC1503',
                }}>
                <span>{category.icon}</span>
              </ListItemIcon>
              <ListItemText
                primary={category.name}
                sx={{
                  opacity: category.name === selectedCategory ? 1 : 0.8,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
