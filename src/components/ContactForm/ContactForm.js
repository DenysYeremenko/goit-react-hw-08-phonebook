import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/operations';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const theme = createTheme();
  const handleSubmit = event => {
    event.preventDefault();
    const {
      elements: { name, number },
    } = event.target;
    if (
      contacts.findIndex(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      ) >= 0
    ) {
      alert(`${name.value} is already in contacts.`);
      return;
    }
    const contact = {
      name: name.value,
      number: number.value,
    };
    dispatch(addContact(contact));
    event.target.reset();
  };

  return (
    // <form onSubmit={submitHandler}>
    //   <label>
    //     Name
    //     <input
    //       type="text"
    //       name="name"
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       required
    //     />
    //   </label>
    //   <label>
    //     Number
    //     <input
    //       type="tel"
    //       name="number"
    //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //       required
    //     />
    //   </label>
    //   <button type="submit">Add contact</button>
    // </form>

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add contact
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="Contact Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Phone Number"
                  name="number"
                  type="number"
                  autoComplete="number"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
