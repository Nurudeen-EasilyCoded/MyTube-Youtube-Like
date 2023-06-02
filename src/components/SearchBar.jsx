import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingLeft: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end', // Keep the search icon at the right
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();

  const handleSubmitSearch = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmitSearch();
    }
  };

  return (
    <SearchBox component='form' onSubmit={handleSubmitSearch}>
      <StyledInputBase
        placeholder='Search…'
        inputProps={{ 'aria-label': 'search' }}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SearchIconWrapper>
        <IconButton type='submit' onClick={handleSubmitSearch}>
          <SearchIcon sx={{ color: 'red' }} />
        </IconButton>
      </SearchIconWrapper>
    </SearchBox>
  );
};

export default SearchBar;
