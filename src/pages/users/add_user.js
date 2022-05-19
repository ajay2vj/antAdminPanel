import { Form, Input, Button, Select, Row, Col } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQueryClient } from 'react-query';
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


export default function AddUser() {
  const [form] = Form.useForm();
  const [user_name, setUsername] = useState();
  const [user_email, setUserEmail] = useState();
  const [user_type, setUserType] = useState();
  const queryClient = useQueryClient()
  let history = useHistory();
  const selectType = (selectedType) => {
    setUserType(selectedType)
  }

  async function createUser(credentials) {
    return fetch('https://data2204n.herokuapp.com/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

   const handleSubmit = async() => {
     try{
      await createUser({
        user_name,
        user_email,
        user_type,
      });
     }catch(error){
        // console.log(error)
     }finally{
        toast("User created successfully, password will be sent to mail!");
        queryClient.invalidateQueries('userList', { exact: true })
        // setVisible(false)
        history.push('/user-list');
     }
  }

  return (
    <Layout
      headingText="Add new user"
      content={
        <Row>
          <ToastContainer />
          <Col span={13} offset={4}>
            <div className='px-5 py-5'>
              <Form {...layout} form={form} name="control-hooks" onFinish={handleSubmit}>
                <Form.Item
                  name="userName"
                  label="User Name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input onChange={(e)=> setUsername(e.target.value)}/>
                </Form.Item>
                <Form.Item
                  name="userEmail"
                  label="User Email"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input onChange={(e)=> setUserEmail(e.target.value)}/>
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
                    onChange={selectType}
                    allowClear
                  >
                    <Option value="ADMIN">Admin</Option>
                    <Option value="DOCTOR">Doctor</Option>
                    <Option value="NURSE">Nurse</Option>
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
