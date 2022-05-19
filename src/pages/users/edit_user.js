import { Form, Input, Button, Select, Row, Col } from 'antd';
import Layout from '../layout';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


const EditUser = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // console.log(values);
  };

  return (
    <Layout
      headingText='Edit user'
      content={
        <Row>
          <Col span={13} offset={4}>
            <div className='px-5 py-5'>
              <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item
                  name="userEmail"
                  label="User Email"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Select a option and change input text above"
                    // onChange={onGenderChange}
                    allowClear
                  >
                    <Option value="admin">Admin</Option>
                    <Option value="doctor">Doctor</Option>
                    <Option value="static">Static</Option>
                  </Select>
                </Form.Item>
                <Form.Item className='flex justify-end'>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      }
    />
  );
};

export default EditUser;