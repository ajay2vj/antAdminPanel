import React from 'react';
import Login from './components/login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './pages/dashboard'
import Users from './pages/users';
import Organization from './pages/organization'
import Cases from './pages/cases';
import Forms from './pages/forms'
import AddUser from './pages/users/add_user';
import Layout from './pages/layout';
import './App.css'
function App() {
  const token = localStorage.getItem('accessToken')
  if(!token) {
    return <div className='py-28 color-background'>
    <Login />
  </div>
  }
  return (
    <>
      <Router>
        <Switch>
          <Route path="/sidebar" component={Layout} />
          <Route path="/dashboard" component={Dashboard} />
          {/* <Route path="/" component={Dashboard} /> */}
          <Route path="/user-list" component={Users} />
          <Route path="/organizations" component={Organization} />
          <Route path="/case-list" component={Cases} />
          <Route path="/form-list" component={Forms} />
          <Route path="/user-add" component={AddUser} />
        </Switch>
      </Router>
    </>
        
  );
}

export default App;
