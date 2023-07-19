import React from 'react';
import Image from 'material-ui-image'
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function About(){

    return(
        <>
        <div className='sub-header'>
        <h5>ABOUT PORTAL</h5>
          <Link to='/home'><Button variant="contained" sx={{ mt: 25 }} style={{backgroundColor:'#2196f3', color: 'white'}}>BACK</Button></Link>
        </div>
        <div className='container'>
              <div className='image-container'>
              <Image src='https://source.unsplash.com/random' />
              </div>
              <div className='containt'>
                  <h3 color='#212121'>About Student Assignment Submission Portal</h3>
                  <p>
                    A student information system (SIS), student management system, school administration
                    software or student administration system is a management information system for education sector 
                    establishments used to manage student data.It integrates students, parents, teachers and the
                    administration. Student information systems provide capabilities for registering students in courses;
                    documenting grading, transcripts of academic achievement and co-curricular activities, and the
                    results of student assessment scores; forming student schedules; tracking student attendance;
                    generating reports and managing other student-related data needs in an educational institution.
                    Information security is a concern, as universities house an array of sensitive personal information,
                     making them potentially attractive targets for security breaches, such as those experienced by retail corporations or healthcare providers.
                  </p>
              </div>
          </div>
        </>
    )
}