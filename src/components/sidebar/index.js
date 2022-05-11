import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import {
  MenuFoldOutlined,
  UserOutlined,
  MedicineBoxFilled,
  FormOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import './style.css';
export default function Sidebar({content, setKey}){
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const MenuClick = (e) => {
    setKey(e?.key)
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
              icon: <UserOutlined />,
              label: 'Users',
            },
            {
              key: '2',
              icon: <MedicineBoxFilled />,
              label: 'Cases',
            },
            {
              key: '3',
              icon: <FormOutlined />,
              label: 'Forms',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? 
              <MenuUnfoldOutlined 
                onClick={()=>{setCollapsed(!collapsed)}} 
              /> 
            : <MenuFoldOutlined 
                onClick={()=>{setCollapsed(!collapsed)}}
              />
          }
          
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