import { Col, Row } from 'antd';
import Login from './components/login';
import useToken from './hooks/useToken';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages';
function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Row className='py-40'>
      <Col span={24} className='text-center pb-6'>
        <span className='text-2xl text-center font-sans font-semibold'>
          NCD LOGIN
        </span>
      </Col>
      <Col span={12} offset={6}>
        <Login setToken={setToken}/>
      </Col>
  </Row>
  }
  return (
    <>
      <Home />
      <Router>
        <Routes>
          <Route path="/admin" element={<Home />} />
        </Routes>
      </Router>
    </>
        
  );
}

export default App;
