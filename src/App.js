// import { Col, Row } from 'antd';
import Login from './components/login';
import useToken from './hooks/useToken';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './pages';
import Dashboard from './pages/dashboard'
import Users from './pages/users';
import Organization from './pages/organization'
import Cases from './pages/cases';
import Forms from './pages/forms'
import AddUser from './pages/users/add_user';
function App() {
  const { token, setToken } = useToken();
  
  // if(!token) {
  //   return <Row className='py-40'>
  //     <Col span={24} className='text-center pb-6'>
  //       <span className='text-2xl text-center font-sans font-semibold'>
  //         NCD LOGIN
  //       </span>
  //     </Col>
  //     <Col span={12} offset={6}>
  //       <Login setToken={setToken}/>
  //     </Col>
  // </Row>
  // }
  const routeToRedirect = !token ? '/login' : '/admin';

  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/user-list" component={Users} />
          <Route path="/organization" component={Organization} />
          <Route path="/case-list" component={Cases} />
          <Route path="/form-list" component={Forms} />
          <Route path="/user-add" component={AddUser} />
          <Route path="/login" render={(props) => 
            <div className='py-28'>
              <Login {...props} setToken={setToken}/>
            </div>
          } />
        </Switch>
        <Redirect
          to={
            routeToRedirect
          }
        />
      </Router>
    </>
        
  );
}

export default App;
