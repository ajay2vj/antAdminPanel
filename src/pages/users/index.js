import React, { useState } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query'
import Loader from '../../components/Loader';
import Layout from '../layout';


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

export default function Users() {
  const [selectionType, ] = useState('checkbox');
  const queryClient = useQueryClient()

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
    created_at: '22/02/2022',
    // action: 'Delete',
  }))

  async function deleteAPI(credentials) {
    return fetch('https://data2204n.herokuapp.com/user/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
   const handleDelete = async(key) => {
     await deleteAPI({
      id: key
    });
    queryClient.invalidateQueries('userList', { exact: true })
  }
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
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) =>
      dataTransform?.length >= 1 ? (
        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
          <Button>Delete</Button>
        </Popconfirm>
      ) : null,
    },
  ];
  return (
    <Layout
      headingText='User List'
      content={
        <>
          <Button 
            type="primary" 
            className='float-right mb-2'
          >
            <a href='/user-add'>Add</a>
          </Button>
          {dataFetch.isLoading ? (
          <div className="w-full py-20 flex justify-center items-center">
            <Loader />
          </div>
          ) : (
            <Table
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columns}
              dataSource={dataTransform}
            />
          )} 
        </>
      }
    />
  );
};
