import React, { useState } from 'react';
import { Table, Divider, Button } from 'antd';
import {
  ArrowLeftOutlined
} from '@ant-design/icons';
import './style.css'
import AddUser from './add_user';
const columns = [
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'User Type',
    dataIndex: 'user_type',
  },
  {
    title: 'Created At',
    dataIndex: 'create_at',
  },
];
const data = [
  {
    key: '1',
    email: 'ajax@gmail.com',
    user_type: 'Admin',
    create_at: '01/12/2022',
  },
  {
    key: '2',
    email: 'java@gmail.com',
    user_type: 'Doctor',
    create_at: '10/09/2020',
  },
  {
    key: '3',
    email: 'javascript@gmail.com',
    user_type: 'Admin',
    create_at: '11/09/2019',
  },
  {
    key: '4',
    email: 'react@gmail.com',
    user_type: 'Doctor',
    create_at: '22/02/2022',
  },
]; // rowSelection object indicates the need for row selection

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
          dataSource={data}
        />
      </>
      )}
      
    </div>
  );
};

export default Users;