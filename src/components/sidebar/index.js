import React, { useState } from "react";
import { Button, Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
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
export default function Sidebar({content, setPathname}){
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  let history = useHistory()
  const MenuClick = (e) => {
    setPathname(e?.domEvent?.view?.location?.pathname)
  }
  
  return(
    <div className="flex">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">NCD</div>
        <Menu
          onClick={MenuClick}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}> <Link to={`/dashboard`}>Dashboard</Link></Menu.Item>
          <Menu.SubMenu
            icon={<UserOutlined />}
            title={'User'}
            key="6"
          >
            <Menu.Item> <Link to={`/user-list`}>User List</Link></Menu.Item>
            <Menu.Item> <Link to={`/user-add`}>Add User</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="3" icon={<ApartmentOutlined />}> <Link to={`/organizations`}>Organizations</Link></Menu.Item>
          <Menu.Item key="4" icon={<MedicineBoxFilled />}> <Link to={`/case-list`}>Cases</Link></Menu.Item>
          <Menu.Item key="5" icon={<FormOutlined />}> <Link to={`/form-list`}>Forms</Link></Menu.Item>
        </Menu>
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
    </div>
  )
}