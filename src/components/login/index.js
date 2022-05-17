import React, { useState } from 'react';
import { Input, Button } from 'antd';
import PropTypes from 'prop-types';
import './login.css'
import loginImg from '../../assets/img/login.png'

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  async function loginUser(credentials) {
    return fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
   const handleSubmit = async() => {
    // e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    window.location.reload();
  }

  return (
    <div>
      <div className="box-form">
        
        <div className="right">
          <h2>NCD Login</h2>
          {/* <p>Don't have an account? <span>Creat Your Account</span> it takes less than a minute</p> */}
          <div className="inputs">
            <Input 
              type="text" 
              placeholder="User Name"
              autoComplete='off'
              onChange={e => setUserName(e.target.value)}
            />
            <br />
            <Input 
              type="password"
              placeholder="Password"
              autoComplete='off'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-end'>
            <Button 
              type="primary" 
              htmlType="submit"
              onClick={(e)=>handleSubmit(e)}
            >
              Login
            </Button>
          </div>
        </div>
        <div className="left">
          <img src={loginImg} alt='login'/>
        </div>
      </div>
    
    {/* <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={(e)=>handleSubmit(e)}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input onChange={e => setUserName(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password  onChange={e => setPassword(e.target.value)}/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form> */}
    </div>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
