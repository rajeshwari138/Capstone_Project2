import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import {Box, TextField, Button, Container, Avatar} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import jwt from 'jsonwebtoken';


const theme = createTheme();


  export default function ChangePassword() {

    const token = localStorage.getItem('token');
    const history = useHistory();

    const handleSubmit = async(event) => {
      event.preventDefault();

      var decoded = jwt.decode(token);

    if(decoded.exp*1000 <= Date.now()) {
        this.props.history.push('/student');
    }else{

      try{

        const value = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console

        var response = await axios.post('https://student-task-server.herokuapp.com/userpassword/resetpassword', {
            email : value.get('email'),
            password : value.get('password'),
            newpassword : value.get('newpassword')
        });

        if(response) {
          alert("Password updated successfully");
            localStorage.removeItem('token');
            history.push('/student');
            }
        } catch(err) {
          alert("Enter the valid credentials");
          console.log(err);
        }
      }
    };


    return (
        <div>
        <div className='sub-header'>
       <h5>RESET PASSWORD</h5>
       <Link to='/studentdashboard'><Button variant="contained" sx={{ mt: 25 }} style={{backgroundColor:'#2196f3', color: 'white'}}>BACK</Button></Link>
        </div>
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
            <LockIcon />
            </Avatar>
        <Typography component="h1" variant="h6" style={{ margin: '16px 0' }}>
          Password Reset
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, mb: 1}}>
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
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                type="password"
                label="Enter the current password"
                name="password"
                autoComplete="password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="password"
                id="newpassword"
                label="Enter the new password"
                name="newpassword"
                autoComplete="newpassword"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2}}
              >
                {'Reset Password'}
              </Button>
            </Box>
            </Box>
        </Container>  
      </ThemeProvider>
      </div>
    )
  }
