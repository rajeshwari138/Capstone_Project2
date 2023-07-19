import * as React from 'react';
import axios from 'axios';
import {Avatar, Button, CssBaseline, TextField, Container, Box, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/Lock';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';


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
  
  export default function ForgotReset() {

    const history = useHistory();


    const handleSubmit = async(event) => {
      event.preventDefault();
        
        const userId= localStorage.getItem("userId");
        const token= localStorage.getItem("token");

      const value = new FormData(event.currentTarget);

      const newPassword = value.get('password');
      const rePassword = value.get('repassword');

      if(newPassword === rePassword ){
      try{

      // eslint-disable-next-line no-console

        await axios.post(`https://student-task-server.herokuapp.com/userpassword/${userId}/${token}`, {
            password : value.get('password')
        });
          
          localStorage.removeItem('userId');
          localStorage.removeItem('token');

        alert("Password updated successfully");

        history.push('/home');
            
        } catch(err) {
          alert("Kindly check the link and try again");
          console.log(err);
        }
        } else {
        alert("Password does not match");
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
              Forgot Password Reset
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              type="password"
              label="Enter the new password"
              name="password"
              autoComplete="password"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="repassword"
                type="password"
                label="Confirm the password"
                name="repassword"
                autoComplete="repassword"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>  
      </ThemeProvider>
    );
  }
