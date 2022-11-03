import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import AccountBox from '@mui/icons-material/AccountBox';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const { isLoggedIn } = useAuth();
  const [dense] = useState(false);
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  useEffect(() => {
    isLoggedIn && dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  const deleteHandler = id => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = () =>
    filter !== ''
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

  return (
    contacts.length > 0 && (
      <Grid item xs={12} md={6}>
        <Demo>
          <List dense={dense}>
            {visibleContacts().map(contact => (
              <ListItem
                key={contact.name}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteHandler(contact.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <AccountBox />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`${contact.name}: ${contact.number}`} />
              </ListItem>
            ))}
          </List>
        </Demo>
      </Grid>
    )
  );
};
