import * as React from 'react';
import axios from 'axios';
import {Avatar, Button, CssBaseline, TextField, Container, Box, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/Lock';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link} from 'react-router-dom';


function Copyright(props) {
    return (
      <Typography variant="body2" color="textSecondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" to="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const theme = createTheme();
  
  export default function ResetLink() {

    const handleSubmit = async(event) => {
      event.preventDefault();

      try{

        const value = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console

        const response = await axios.post('https://student-task-server.herokuapp.com/userpassword', {
            email : value.get('email')
        });
          
          localStorage.setItem("userId", response.data.id);
          localStorage.setItem("token", response.data.token);

        alert("Kindly check your email for reset-link");
            
        } catch(err) {
          alert("Email is not registered, Kindly check");
          console.log(err);
        }
    };

         

  
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Link
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter the registered email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>  
      </ThemeProvider>
    );
  }
