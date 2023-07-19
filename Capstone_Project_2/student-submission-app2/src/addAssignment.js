import * as React from 'react';
import axios from 'axios';
import {Avatar, Button, CssBaseline, TextField, Paper, Box, Grid, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';
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

export default function PostAssignment() {

    const history = useHistory();
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');

    if(role !== "Admin"){
        history.push('/admin');
    }

  const handleSubmit = async(event) => {
    event.preventDefault();

    var decoded = jwt.decode(token);

    if(decoded.exp*1000 <= Date.now()) {
        this.props.history.push('/admin');
    } else {
        try{
    const value = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    await axios.post('https://student-task-server.herokuapp.com/assignment/saveassignment', {
        task : value.get('task'),
        description : value.get('description'),
        reference : value.get('reference'),
        github : value.get('github'),
        deployed : value.get('deployed')
        },{
            headers: {
            token: token
            }
        });

        alert("Assignment posted successfully");
    }catch (err){
        alert("Failed to Post an assignment");
        console.log(err);
    }
    }
  };

  return (
    <>
    <div className='sub-header'>
       <h5>ADD ASSIGNMENT</h5>
       <Link to='/admindashboard'><Button variant="contained" sx={{ mt: 25 }} style={{backgroundColor:'#2196f3', color: 'white'}}>BACK</Button></Link>
    </div>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '80vh' }}>
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
              ASSIGNMENT
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="task"
                label="Assignment Number"
                name="task"
                autoComplete="task"
                autoFocus
              />
               <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
              />
               <TextField
                margin="normal"
                required
                fullWidth
                id="reference"
                label="Reference"
                name="reference"
                autoComplete="reference"
              />
               <TextField
                margin="normal"
                name="github"
                type="hidden"
                defaultValue=""
                id = "github"
              />
               <TextField
                margin="normal"
                name="deployed"
                type="hidden"
                defaultValue=""
                id = "deployed"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Post An Assignment
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </>
  );
}