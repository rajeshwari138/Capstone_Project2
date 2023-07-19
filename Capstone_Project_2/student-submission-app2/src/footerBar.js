import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PublicIcon from '@material-ui/icons/Public';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import './footarBar.css';

function FooterBar () {

    return (
        <>
        <div className='footer-container'>
        <div className='footer-containt'>
            <div className='contact'>
                <h5>CONTACT INFO</h5>
                <div className = 'address'>
                 <HomeIcon />
                 <p>Address:No.XXXXXX street</p>
                </div>
                <div className='country'>
                    <PublicIcon />
                    <p>Mars City, Country</p>
                </div>
                <div className='mobile'>
                     <PhoneAndroidIcon />
                     <p>Mobile:(123)456-7890 </p>
                </div>
                <div className='phone'>
                     <PhoneIcon />
                     <p>Mobile:(123)456-7890 </p>
                </div>
                <div className='email'>
                     <EmailIcon />
                     <p>Email:admin@123.com</p>
                </div>
            </div>
            <div className='module'>
                <h5>MODULES</h5>
                <ul>
                    <li>Assignment Mudule</li>
                    <li>User Module</li>
                    <li>Student Module</li>
                    <li>Login Module</li>
                    <li>Subject Module</li>
                </ul>
                </div> 
                <div className='projectLink'>
                    <h5>PROJECT LINKS</h5>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Login</li>
                        <li>Email Us</li>
                    </ul>
                </div>
                <div className='aboutProject'>
                    <h5>ABOUT PROJECT</h5>
                    <p>
                    A safety instrumented system (SIS) 
                    consists of an engineered set of hardware and 
                    software controls which are especially used on 
                    critical process systems.
                    </p>
                </div>
            </div>
        </div>
        <div className='footer-border'>
            <p>©Copyright Student Information System</p>
        </div>
        </>
    )
}

export default FooterBar;