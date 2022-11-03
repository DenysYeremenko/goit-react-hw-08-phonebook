import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const changeHandler = event => {
    dispatch(setFilter(event.target.value));
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#1976d2',
    '&:hover': {
      backgroundColor: '#1976d2',
    },
    align: 'center',
    width: '396px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '38ch',
      },
      color: 'white',
    },
  }));

  return (
    <Search sx={{ mb: 2 }}>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: 'white' }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search contacts by name"
        inputProps={{ 'aria-label': 'search' }}
        name="filter"
        onChange={changeHandler}
      />
    </Search>
  );
};
