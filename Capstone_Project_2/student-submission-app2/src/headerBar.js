import { Grid, Toolbar, AppBar, Typography, Box, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link} from 'react-router-dom';



function StudentTask(){

    return (
        <>
           <Grid>
           <Box sx={{ flexGrow: 1 }}>  
             <AppBar position="static">
              <Toolbar>
              <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2}} >
               <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ ml:5, flexGrow: 1 }}>
                Student Task Submission Portal
                </Typography>
                <AssignmentIcon></AssignmentIcon>
                <Box sx={{ ml : 35}}>
                <Typography variant="h6" component="div" sx={{ ml:5, flexGrow: 1 }}>
                <Link to='/home'><Button style={{backgroundColor: '#757575', color: 'whitesmoke'}}>Home</Button></Link>
                </Typography>
                </Box>
                <Box sx={{ ml : 3}}>
                <Typography variant="h6" component="div" sx={{ ml:5, flexGrow: 1 }}>
                <Link to='/about'><Button style={{backgroundColor: '#757575', color: 'whitesmoke'}}>About</Button></Link>
                </Typography>
                </Box>
                <Box sx={{ ml : 3}}>
                <Typography variant="h6" component="div" sx={{ ml:5, flexGrow: 1 }}>
                <Link to='/student'><Button style={{backgroundColor: '#757575', color: 'whitesmoke'}}>{'Student Login'}</Button></Link>
                </Typography>
                </Box>
                <Box sx={{ ml : 3}}>
                <Typography variant="h6" component="div" sx={{ ml:5, flexGrow: 1 }}>
                <Link to='/admin'><Button style={{backgroundColor: '#757575', color: 'whitesmoke'}}>{'Admin Login'}</Button></Link>
                </Typography>
                </Box>
                <Box sx={{ ml : 3}}>
                <Typography variant="h6" component="div" sx={{ ml:5, flexGrow: 1 }}>
                <Link to='/contact'><Button style={{backgroundColor: '#757575', color: 'whitesmoke'}}>{'Contact Us'}</Button></Link>
                </Typography>
                </Box>
              </Toolbar>
             </AppBar>
             </Box>
          </Grid>
        </>
    )}

export default StudentTask;