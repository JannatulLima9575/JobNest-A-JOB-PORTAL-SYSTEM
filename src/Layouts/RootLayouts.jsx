import React from 'react';
import Navbar from '../Pages/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer';

const RootLayouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayouts;