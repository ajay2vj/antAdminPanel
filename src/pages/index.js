import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Cases from './cases';
import Dashboard from './dashboard';
import Forms from './forms';
import Organization from './organization';
import Users from './users';
import AddUser from './users/add_user';

function Home() {
  const [pathName, setPathname] = useState('/dashboard');
  return (
    <Sidebar
      content={
        <>
          {pathName === '/dashboard' &&(
            <Dashboard />
          )}
          {pathName === '/user-list'&&(
            <Users />
          )}
          {pathName === '/organization' &&(
            <Organization />
          )}
          {pathName === '/case-list' &&(
            <Cases />
          )}
          {pathName === '/form-list' &&(
            <Forms />
          )}
          {pathName === '/user-add' &&(
            <AddUser />
          )}
        </>
      }
      setPathname={setPathname}
    />
  );
}

export default Home;
