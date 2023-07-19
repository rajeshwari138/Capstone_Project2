import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import {Card, Typography, Grid, Button, CardActions, CardContent, Avatar, CssBaseline, TextField, 
  FormControlLabel, Checkbox, Container, Box, Divider} from '@material-ui/core';
import {grey} from '@material-ui/core/colors'
import LocationOn from '@material-ui/icons/LocationOn';
import Image from 'material-ui-image';
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


export default function ManageAdmin() {

    const [user, setUser] = useState([]);
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const history = useHistory();

    if(role !== "Admin"){
        history.push('/admin');
    }
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
      useEffect( async ()=> {
        var decoded = jwt.decode(token);
  
        if(decoded.exp*1000 <= Date.now()) {
            history.push('/admin');
        } else {
            try{
            var response = await axios.get('http://localhost:3000/auth/user');
            setUser(response.data);
            } catch(err) {
                console.warn(err);
            }
        }       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const updateAdmin = async(id) => {
        var decoded = jwt.decode(token);

        if(decoded.exp*1000 <= Date.now()) {
            history.push('/admin');
        } else {
            try{
                await axios.delete(`https://student-task-server.herokuapp.com/auth/${id}`);

                setUser(user.filter(user => user._id !== id));

            } catch(err) {
                console.warn(err);
            }
        }  
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        var decoded = jwt.decode(token);

        if(decoded.exp*1000 <= Date.now()) {
            history.push('/admin');
        } else {
              
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
                setUser(user.concat(response.data));
                  }
              } catch(err) {
                alert("Already a member, Kindly enter valid details");
                console.log(err);
              }
            }                          
        };

  return (
    <>
    <div className='sub-header'>
       <h5>MANAGE STUDENT</h5>
       <Link to='/admindashboard'><Button variant="contained" sx={{ mt: 25 }} style={{backgroundColor:'#2196f3', color: 'white'}}>BACK</Button></Link>
    </div>
    <Grid container spacing={2} style={{margin: '30px'}}>
      {user.map(row=> (
        <Grid item key={row._id}>
          <Card>
            <Image src="https://i.pravatar.cc/500"/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {row.fname} {row.lname}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <LocationOn sx={{color: grey[500]}} /> {row.address}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {row.phone}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Student</Button>
              <Button onClick={() => updateAdmin(row._id)} variant="contained" size="small" style={{backgroundColor:'#f44336', color: 'white'}}>Remove</Button>
            </CardActions>
         </Card>
        </Grid>
      ))}
    </Grid><br /><br />
    <Divider />
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
              ADD STUDENT
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
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>     
      </ThemeProvider>
    </>
  );
}