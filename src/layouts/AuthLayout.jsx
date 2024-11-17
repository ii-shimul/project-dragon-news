import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
  return (
    <div className='bg-[#f3f3f3] min-h-screen'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;