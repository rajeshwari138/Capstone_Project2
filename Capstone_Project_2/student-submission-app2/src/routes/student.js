import * as React from 'react';
import axios from 'axios';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Box, Grid, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/Lock';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import Image from 'material-ui-image'


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
  
  export default function SignIn() {

    const history = useHistory();


    const handleSubmit = async(event) => {
      event.preventDefault();

      try{

        const value = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console

        var response = await axios.post('https://student-task-server.herokuapp.com/auth/login', {
            email : value.get('email'),
            password : value.get('password')
        });

        if(response.data) {
            await localStorage.setItem('token', response.data)
            history.push('/studentdashboard');
            }
        } catch(err) {
          alert("Error log-in, Kindly check the credentials or sign-up");
          console.log(err);
        }
    };

         

  
    return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Grid container component="main" sx={{ height: '15vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ><Image src='https://source.unsplash.com/random' /></Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button><br /><br />
              <Grid container>
                <Grid item xs>
                  <Link to='/resetlink' variant="body2">
                    Forgot password?
                  </Link><br /><br />
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Box>
          </Box>
          </Grid>
          </Grid>
      </ThemeProvider>
    );
  }