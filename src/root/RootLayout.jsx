import React from 'react';
import { Outlet } from 'react-router';
import Nevbar from '../component/Nevbar';
import Footer from '../component/Footer';

const RootLayout = () => {
    return (
        <div>
            <Nevbar></Nevbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;