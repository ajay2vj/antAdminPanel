import { ClearOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

export default function SideIndex({
  handleToggleSidebar,
  handleCollapsedChange,
  content,
  headingText
}) {
  const logoutClick = () =>{
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  }
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <ClearOutlined />
      </div>
      <div className="block">
        <div>
          <MenuFoldOutlined 
            onClick={handleCollapsedChange}
            className='cursor-pointer'
            style={{ fontSize: '22px', color: '#000' }}
          />
        </div>
        <Button onClick={logoutClick}>
          Logout
        </Button>
      </div>
      <header>
        {headingText}
      </header>
      <div>
        {content}
      </div>
    </main>
  );
};
