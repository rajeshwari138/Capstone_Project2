import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './subjectLists.css';
import jwt from 'jsonwebtoken';
import {Avatar, Grid, Typography, Button, Box, Card, CardContent, CardActions, Container, CssBaseline, TextField } from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme();

export default function Signin() {

  const [assignment, setAssignment] = useState([]);
  const token = localStorage.getItem('token');
  const history = useHistory();

  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async ()=> {
      var decoded = jwt.decode(token);

      if(decoded.exp*1000 <= Date.now()) {
          history.push('/student');
      } else {
          try{
          var response = await axios.get('https://student-task-server.herokuapp.com/assignment/getassignment', {
              headers: {
                  token: token
                   }
              });
              setAssignment(response.data);
          } catch(err) {
              console.warn(err);
          }
      }       
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    var decoded = jwt.decode(token);

    if(decoded.exp*1000 <= Date.now()) {
        this.props.history.push('/student');
    } else {

       const value = new FormData(event.currentTarget);

        await axios.post('https://student-task-server.herokuapp.com/report/savereport', {
        task : value.get('task'),
        github : value.get('github'),
        deployed : value.get('deployed')
        },{
            headers: {
            token: token
            }
        });
              alert("Sent successfully");
    }
}


  return (
    <>
    <div className='sub-header'>
       <h5>ASSIGNMENT DETAILS</h5>
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
              <AssignmentTurnedInIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              ASSIGNMENTS
            </Typography>
            <Grid container spacing={2} style={{margin: '30px'}}>
                {assignment.map(row=> (
                     <Grid item key={row._id}>
                        <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="textSecondary" gutterBottom>
                              Task : {row.task}
                            </Typography>
                            <Typography  component="div">
                              Description : {row.description}
                            </Typography>
                            <Typography component="div" sx={{ mb: 1.5, pt: 5 }}>
                              Reference : {row.reference}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                              <TextField
                                margin="normal"
                                name="task"
                                type="hidden"
                                defaultValue={row.task}
                                id = "task" />
                              <TextField
                                margin="normal"
                                fullWidth
                                name="github"
                                label="Github Link"
                                defaultValue={row.github}
                                id = "github"></TextField>
                              <TextField
                                margin="normal"
                                fullWidth
                                name="deployed"
                                label="Deployed Link"
                                defaultValue={row.deployed}
                                id = "deployed"></TextField>
                              <Button type="submit" variant="contained">Send</Button>
                            </Box>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
             </Box>
        </Container>  
      </ThemeProvider>
    </>
  );
}