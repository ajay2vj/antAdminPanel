import { Col, Row } from 'antd';
import Login from './components/login';

function App() {
  return (
    <Row className='py-40'>
      <Col span={12} offset={6}>
        <Login />
      </Col>
    </Row>
  );
}

export default App;
