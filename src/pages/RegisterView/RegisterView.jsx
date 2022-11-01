import { useDispatch } from 'react-redux';
import * as React from 'react';
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
import { register } from 'redux/auth/operations';

export const RegisterView = props => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    if (
      form.elements.name.value.length < 5 ||
      form.elements.email.value.length < 5 ||
      form.elements.password.value.length < 5
    ) {
      alert('Please write correct user information');
      return;
    }
    const userData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(userData));
    form.reset();
  };

  const theme = createTheme();

  return (
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
            Register
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
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//       onSubmit={handleSubmit}
//     >
//       <TextField required id="outlined" name="name" label="Username" />
//       <TextField required id="outlined" name="email" label="Email" />
//       <TextField
//         required
//         id="outlined-password-input"
//         label="Password"
//         type="password"
//         autoComplete="current-password"
//         name="password"
//       />
//       <Button variant="contained" type="submit">
//         Register
//       </Button>
//     </Box>
//   );
// };

// {/* // <div>
//     //   <form onSubmit={handleSubmit}>
//     //     <label htmlFor="">
//     //       Username
//     //       <input type="text" name="name" />
//     //     </label>
//     //     <label htmlFor="">
//     //       Email
//     //       <input type="text" name="email" />
//     //     </label>
//     //     <label htmlFor="">
//     //       Password
//     //       <input type="text" name="password" />
//     //     </label>
//     //     <button type="submit">Register</button>
//     //   </form>
//     // </div> */}
