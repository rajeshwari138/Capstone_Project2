import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import {Card, CardContent, Button, Typography, Grid} from '@material-ui/core';



export default function AssignmentReports() {

    const [reports, setReports] = useState([]);
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
            var response = await axios.get('https://student-task-server.herokuapp.com/report/getreport', {
                headers: {
                    token: token
                     }
                });
                   setReports(response.data);
            } catch(err) {
                console.warn(err);
            }
        }       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  return (
      <>
      <div className='sub-header'>
        <h5>ASSIGNMENT REPORTS</h5>
          <Link to='/admindashboard'><Button variant="contained" sx={{ mt: 25 }} style={{backgroundColor:'#2196f3', color: 'white'}}>BACK</Button></Link>
      </div>
      <Grid container spacing={2} style={{margin: '30px'}}>
        {reports.map(row=> (
        <Grid item key={row._id}>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="textSecondary" gutterBottom>
          Task : {row.task}
          </Typography>
          <Typography variant="body2">
          Github : {row.github}
          <br />
          Deployed  : {row.deployed}
          </Typography>
          </CardContent>
        </Card>
        </Grid>
       ))}
      </Grid>
    </>
  );
}