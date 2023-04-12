import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default Header;