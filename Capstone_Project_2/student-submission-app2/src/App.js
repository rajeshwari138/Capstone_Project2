import React from 'react';
import HeaderBar from './headerBar';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import StudentLogin from './routes/student';
import AdminLogin from './routes/admin';
import ContactUs from './routes/contact';
import FooterBar from './footerBar';
import StudentRegister from './studentRegister';
import StudentDashboard from './studentDashboard';
import SubjectLists from './subjectLists';
import MyAccount from './myAccount';
import AdminDashboard from './adminDashboard';
import ChangePassword from './changePassword';
import AdminPassReset from './adminpassreset';
import ResetLink from './resetlink';
import AdminresetLink from './adminresetLink';
import ForgotPassword from './forgotReset';
import PostAssignment from './addAssignment';
import AssignmentReport from './assignmentReport';
import ManageAdmin from './manageAdmin';
import ManageUser from './manageStudent';



import './App.css';

export const AppContext = React.createContext();


function App() {
 
  return (
    <div className="App">   
      <BrowserRouter>
      <Switch>
      <AppContext.Provider value='dark'>
      <HeaderBar />
      <Route exact path='/' render = {() => {return <Redirect to='/home' />}} />
      <Route path = '/home' component = {Home} />
      <Route exact path= '/about' component = {About} />
      <Route exact path= '/student' component = {StudentLogin} />
      <Route path='/studentregister' component={StudentRegister} />
      <Route path='/studentdashboard' component={StudentDashboard} />
      <Route path='/subjectlists' component={SubjectLists} />
      <Route path='/myaccount' component={MyAccount} />
      <Route exact path= '/admin' component = {AdminLogin} />
      <Route exact path= '/admindashboard' component = {AdminDashboard} />
      <Route exact path= '/changepassword' component = {ChangePassword} />
      <Route exact path= '/adminpassreset' component = {AdminPassReset} />
      <Route exact path= '/resetlink' component = {ResetLink} />
      <Route exact path= '/adminresetlink' component = {AdminresetLink} />
      <Route exact path= '/forgotpassword/:userId/:token' component = {ForgotPassword} />
      <Route exact path= '/postassignment' component = {PostAssignment} />
      <Route exact path= '/assignmentreport' component = {AssignmentReport} />
      <Route exact path= '/manageadmin' component = {ManageAdmin} />
      <Route exact path= '/manageuser' component = {ManageUser} />
      <Route exact path= '/contact' component = {ContactUs} />
      </AppContext.Provider>
      </Switch>
      </BrowserRouter>    
      <FooterBar />
    </div>
  );
}

export default App;
