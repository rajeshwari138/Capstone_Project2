import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'material-ui-image';
import '../home.css';


function Home() {

    const slideImages = [
        {
          url: 'https://2018media.idtech.com/2020-04/boy-coding-at-laptop-with-friend.jpg?a443cb5754',
          caption: 'Experience is the name everyone gives to their mistakes'
        },
        {
          url: 'https://v1.nitrocdn.com/jvtmqLwnzuxlVtOjXgDKchkGIPvTfxMi/assets/static/optimized/rev-27618a3/wp-content/uploads/2020/10/Machin-Learning.jpg',
          caption: 'Fix the cause, not the symptom'
        },
        {
          url: 'https://www.octalsoftware.co.uk/blog/wp-content/uploads/2019/07/uk-full-stack.jpg',
          caption: 'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away'
        },
        {
            url: 'https://apptha-blog.s3.amazonaws.com/blog/wp-content/uploads/2019/11/skills-for-front-end-back-end-developer.jpg',
            caption: 'Before software can be reusable it first has to be usable'
        },
      ];

      

   
      
      return (
          <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div className="each-slide" key={index}>
                <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
          </Slide>
          <Box sx={{fontSize: 'h6.fontSize', fontStyle: 'oblique', fontFamily: 'Monospace', color: '#9e9e9e', lineHeight: 55, fontWeight: 'bolder', mt:3}}>
            <Typography align='center'>
              WELCOME TO STUDENT ASSIGNMENT SUBMISSION PORTAL
            </Typography>
          </Box>
          <div className='container'>
              <div className='image-container'>
              <Image src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-03/09/full/1583735326-3342.jpg" />
              </div>
              <div className='containt'>
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
        </div>
      )
}

export default Home;