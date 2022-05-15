import React, { useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { useQuery } from 'react-query'
import moment from 'moment';
// import { ArrowLeftOutlined } from '@ant-design/icons';
// import AddUser from './add_user';
import Loader from '../../components/Loader';
const columns = [
  {
    title: 'Patient Name',
    dataIndex: 'patient_name',
  },
  {
    title: 'Created At',
    dataIndex: 'created_At',
  }
];

// rowSelection object indicates the need for row selection
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


export default function Cases() {
  const [selectionType, ] = useState('checkbox');
  // const [userAdd, setUseradd] = useState(false);

  const fetchCaseList = async () => {
    const res = await axios({
      url: 'https://data2204n.herokuapp.com/case/getCaseAll',
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, OPTIONS',
        'Access-Control-Allow-Credentials': true
      },
    })
    return res;
  }
  
  const dataFetch = useQuery('userList', fetchCaseList)
  const timeFormat = 'MM/DD/YYYY HH:mm:ss';
  const dataTransform = dataFetch?.data?.data?.Result?.map((item)=>({
    patient_name: item?.patient_name,
    created_At: moment(item?.created_At).format(timeFormat),
    key: item?._id
  }))
  return (
    <div>
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
    </div>
  );
};
