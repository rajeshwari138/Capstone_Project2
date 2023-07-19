import * as React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Container, Box, Grid, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/Lock';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';


function Copyright(props) {

   return (
      <Typography variant="body2" color="inherit" align="center" {...props}>
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
  
     export default function SignUp() {

      const history = useHistory();

      const handleSubmit = async (event) => {
      event.preventDefault();
            
        try{

            const value = new FormData(event.currentTarget);
          // eslint-disable-next-line no-console

            var response = await axios.post('https://student-task-server.herokuapp.com/auth/register', {
                fname : value.get('firstName'),
                lname : value.get('lastName'),
                email : value.get('email'),
                password : value.get('password'),
                address : value.get('location'),
                phone : value.get('phonenumber')
            });

            if(response.data) {
                history.push('/student');
                }
            } catch(err) {
              alert("Already a member, Kindly enter valid details");
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
              Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
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
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="phonenumber"
                    label="Phone Number"
                    id="phonenumber"
                    autoComplete="phonenumber"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="location"
                    label="Location"
                    id="location"
                    autoComplete="location"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to='/student' variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>     
      </ThemeProvider>
    );
 }