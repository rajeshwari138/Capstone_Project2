import * as React from 'react';
import {Link, useHistory} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import Button from '@material-ui/core/Button'


export default function AdminDashboard() {
    const history = useHistory();
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');
    var decoded = jwt.decode(token);

    if(role !== "Admin"){
        history.push('/admin');
    }

    if(decoded.exp*1000 <= Date.now()) {
        history.push('/admin');
    }

    function handleClick(){
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        history.push('/admin');
    }

    

  return (
    <>
    <div className='header'>
       <h5>ADMIN DASHBOARD</h5>
    </div>
    <div className='container'>
        <div className='first'>
            <h5><Link to='/postassignment'><Button style={{backgroundColor: '#039be5', color: 'whitesmoke'}}>{'Add Assignment'}</Button></Link></h5>
        </div>
        <div className='second'>
            <h5><Link to='/assignmentreport'><Button style={{backgroundColor: '#039be5', color: 'whitesmoke'}}>Reports</Button></Link></h5>
        </div>
        <div className='third'>
            <h5><Link to='/manageadmin'><Button style={{backgroundColor: '#039be5', color: 'whitesmoke'}}>{'Manage Admin'}</Button></Link></h5>
        </div>
        <div className='fourth'>
            <h5><Link to='/manageuser'><Button style={{backgroundColor: '#039be5', color: 'whitesmoke'}}>{'Manage Student'}</Button></Link></h5>
        </div>
        <div className='fifth'>
            <h5><Link to='/adminpassreset'><Button style={{backgroundColor: '#039be5', color: 'whitesmoke'}}>{'Change Password'}</Button></Link></h5>
        </div>
        <div className='sixth'>
            <h5><Button style={{backgroundColor: '#039be5', color: 'whitesmoke'}} onClick={handleClick}>{'Log Out'}</Button></h5>
        </div>
    </div>
    </>
  );
}