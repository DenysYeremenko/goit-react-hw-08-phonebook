import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Avatar, Button, Divider, Typography } from '@mui/material';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import NorthIcon from '@mui/icons-material/North';

export const ContactsView = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div>
      <ContactForm />
      <Avatar
        sx={{
          m: 1,
          bgcolor: 'secondary.main',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <SupervisedUserCircleIcon />
      </Avatar>
      <Divider>
        <Typography component="h1" variant="h5" align="center" margin="6px">
          Contacts
        </Typography>
      </Divider>
      <ContactFilter />
      <ContactList />
      <Divider>
        <Button variant="outlined" onClick={scrollTop}>
          <NorthIcon />
        </Button>
      </Divider>
    </div>
  );
};
