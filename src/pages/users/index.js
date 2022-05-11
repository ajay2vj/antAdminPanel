import React, { useState } from 'react';
import { Table, Divider, Button } from 'antd';
import axios from 'axios';
import { useQuery } from 'react-query'
import {
  ArrowLeftOutlined
} from '@ant-design/icons';
import './style.css'
import AddUser from './add_user';
const columns = [
  {
    title: 'User Name',
    dataIndex: 'user_name',
  },
  {
    title: 'User Type',
    dataIndex: 'user_type',
  },
  {
    title: 'Created At',
    dataIndex: 'created_at',
  },
];
// const data = [
//   {
//     key: '1',
//     email: 'ajax@gmail.com',
//     user_type: 'Admin',
//     create_at: '01/12/2022',
//   },
//   {
//     key: '2',
//     email: 'java@gmail.com',
//     user_type: 'Doctor',
//     create_at: '10/09/2020',
//   },
//   {
//     key: '3',
//     email: 'javascript@gmail.com',
//     user_type: 'Admin',
//     create_at: '11/09/2019',
//   },
//   {
//     key: '4',
//     email: 'react@gmail.com',
//     user_type: 'Doctor',
//     create_at: '22/02/2022',
//   },
// ]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.email === 'Disabled User',
    // Column configuration not to be checked
    email: record.email,
  }),
};


const Users = () => {
  const [selectionType, ] = useState('checkbox');
  const [userAdd, setUseradd] = useState(false);

  const fetchUserList = async () => {
    const res = await axios({
      url: 'https://data2204n.herokuapp.com/user/getAll',
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, OPTIONS',
        'Access-Control-Allow-Credentials': true
      },
    })
    return res;
  }
  
  const dataFetch = useQuery('userList', fetchUserList)
  const dataTransform = dataFetch?.data?.data?.map((item)=>({
    user_name: item?.user_name,
    user_type: item?.user_type,
    key: item?._id,
    created_at: '22/02/2022'
  }))
  return (
    <div>
      {userAdd ? (
      <>
        <div className='flex gap-3'>
          <ArrowLeftOutlined 
            onClick={()=> setUseradd(false)}
          />
          <span style={{fontSize: '16px'}}>Back to list</span>
        </div>
        <AddUser />
      </>
      ) : (
      <>
        <Button 
          type="primary" 
          className='float-right mb-2'
          onClick={()=> setUseradd(!userAdd)}
        >
          Add
        </Button>
        <Divider />
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={dataTransform}
        />
      </>
      )}
      
    </div>
  );
};

export default Users;