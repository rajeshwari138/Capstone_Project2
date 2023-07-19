import React from 'react';
import {Button, Card, CardContent, Typography, TextField, TextareaAutosize, Box} from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';

import '../contact.css';


export default function ContactUs() {
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        new FormData(event.currentTarget);
        alert("Thank you, It means a lot");
        history.push('/home');      
    }

    return(
        <>
        <div className='sub-header'>
        <h5>CONTACT US</h5>
          <Link to='/home'><Button variant="contained" sx={{ mt: 25 }} style={{backgroundColor:'#2196f3', color: 'white'}}>BACK</Button></Link>
        </div>
        <div className='container'>
            <div className='details'>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography variant="h5" component="div">
            ADDRESS
            </Typography>
            <Typography variant="body2">
            Revox Crossraid, 85/B Cross Street,
            <br />
            New York, USA
            <br />
            NA1 425L
            </Typography>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography variant="h5" component="div">
            BUSINESS HOURS
            </Typography>
            <Typography variant="body2">
            Monday - Friday 8am to 4pm
            <br />
            Saturday - 7am to 6pm
            <br />
            Sunday - Closed 
            </Typography>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography variant="h5" component="div">
            TELEPHONE
            </Typography>
            <Typography variant="body2">
            +088-01234567890
            <br />
            +088-01234567890
            </Typography>
            </CardContent>
        </Card>
        </div>            
        <div className='form-container'>
        <Card sx={{ maxWidth: 600}}>
            <CardContent>
        <Box component="form" onSubmit={handleSubmit} noValidate>
        <h2>DROP HERE, YOUR WORDS ARE VALUABLE</h2>
        <TextField fullWidth id="name" label="Name" type="text" variant="outlined" /><br /><br />
        <TextField fullWidth id="email" label="Email address" type="email" variant="outlined" /><br /><br />
        <TextField fullWidth id="location" label="Location" type="text" variant="outlined" /><br /><br />
        <TextField fullWidth id="phone" label="Phone Number" type="number" variant="outlined" /><br /><br />
        <TextareaAutosize
        aria-label='minimum height'
        minRows={5}
        id='message'
        placeholder='Message'
        style={{width: 600}} /><br /><br />
        <Button type='submit' variant="contained" sx={{ mt: 25 }} style={{backgroundColor:'#04AA6D', color: 'black'}}>SEND</Button>
        </Box>
        </CardContent>
        </Card>
        </div>
    </div>
    <div className="right-image">
      <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619902.0054433027!2d-122.68851282163044!3d37.534535608111824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1507725785789"
        width="100%" height="300" frameBorder="0"  allowFullScreen data-aos="fade-left" data-aos-duration="3000"></iframe>
    </div>
    </>
    )
}