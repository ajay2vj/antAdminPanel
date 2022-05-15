import React, { useState } from "react";
import { Button, Layout, Menu } from 'antd';
import {
  MenuFoldOutlined,
  UserOutlined,
  MedicineBoxFilled,
  FormOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  ApartmentOutlined
} from '@ant-design/icons';
import './style.css';
import { useHistory } from "react-router-dom";
export default function Sidebar({content, setKey}){
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  let history = useHistory()
  const MenuClick = (e) => {
    setKey(e?.key)
  }
  const logoutClick = () =>{
    localStorage.removeItem('token');
    history.push('/login')
    window.location.reload();
  }
  return(
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">NCD</div>
        <Menu
          onClick={MenuClick}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Users',
            },
            {
              key: '3',
              icon: <ApartmentOutlined />,
              label: 'Organizations',
            },
            {
              key: '4',
              icon: <MedicineBoxFilled />,
              label: 'Cases',
            },
            {
              key: '5',
              icon: <FormOutlined />,
              label: 'Forms',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout" style={{ height: "100vh", overflow: "auto" }}>
        <Header className="site-layout-background" style={{ padding: 0, background: '#FFF' }}>
          {collapsed ? 
              <MenuUnfoldOutlined 
                onClick={()=>{setCollapsed(!collapsed)}} 
              /> 
            : <MenuFoldOutlined 
                onClick={()=>{setCollapsed(!collapsed)}}
              />
          }
          <div className="flex justify-end mt-2 mr-2">
            <Button onClick={()=> logoutClick()}>Logout</Button>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {content}
        </Content>
      </Layout>
    </Layout>
  )
}