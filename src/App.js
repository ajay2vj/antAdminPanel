import { Col, Row } from 'antd';
import Login from './components/login';

function App() {
  return (
    <Row className='py-40'>
      <Col span={24} className='text-center pb-6'>
        <span className='text-2xl text-center font-mono'>
          NCD LOGIN
        </span>
      </Col>
      <Col span={12} offset={6}>
        <Login />
      </Col>
    </Row>
  );
}

export default App;
