import * as React from 'react';
import './studentDashboard.css'
import {Link, useHistory} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import Button from '@material-ui/core/Button'

export default function BasicCard() {
    const token = localStorage.getItem('token');
    const history = useHistory();
    var decoded = jwt.decode(token);    

    if(decoded.exp * 1000 <= Date.now()){
        history.push('/student');
    }

    function handleClick(){
        localStorage.removeItem('token');
        history.push('/student');
    }


  return (
    <>
    <div className='header'>
       <h5>STUDENT DASHBOARD</h5>
    </div>
    <div className='container'>
        <div className='first'>
            <h5><Link to='/subjectlists'><Button style={{backgroundColor: '#039be5', color: 'whitesmoke'}}>{'Subject List'}</Button></Link></h5>
        </div>
        <div className='second'>
            <h5><Link to='/myaccount'><Button style={{backgroundColor: '#039be5', color: 'whitesmoke'}}>{'My Account'}</Button></Link></h5>
        </div>
        <div className='third'>
            <h5><Link to='/changepassword'><Button style={{backgroundColor: '#039be5', color: 'whitesmoke'}}>{'Change Password'}</Button></Link></h5>
        </div>
        <div className='fourth'>
            <h5><Button style={{backgroundColor: '#039be5', color: 'whitesmoke'}} onClick={handleClick}>Log Out</Button></h5>
        </div>
    </div>
    </>
  );
}