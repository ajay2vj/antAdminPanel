import { 
  DashboardOutlined, 
  MedicineBoxFilled, 
  UserAddOutlined,
  ApartmentOutlined,
  FormOutlined,
} from "@ant-design/icons";
import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
export default function SidebarNew({
  collapsed, 
  toggled, 
  handleToggleSidebar
}){
  
  return(
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          NCD
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<DashboardOutlined/>}
          >
            <a href="/dashboard">Dashboard</a>
          </MenuItem>
          <SubMenu
            title={'user'}
            icon={<UserAddOutlined/>}
          >
            <MenuItem><a href="/user-list">User List</a></MenuItem>
            <MenuItem><a href="/user-add">User Add</a></MenuItem>
          </SubMenu>
          <MenuItem icon={<ApartmentOutlined/>}><a href="/organizations">Organization</a></MenuItem>
          <MenuItem icon={<MedicineBoxFilled/>}><a href="/case-list">Cases</a></MenuItem>
          <MenuItem icon={<FormOutlined/>}><a href="/form-list">Forms</a></MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  )
}