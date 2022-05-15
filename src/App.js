// import { Col, Row } from 'antd';
import Login from './components/login';
import useToken from './hooks/useToken';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './pages';
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
