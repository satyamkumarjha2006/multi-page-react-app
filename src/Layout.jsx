import React from 'react';
import Header from './Componenets/Header/Header.jsx'
import Footer from './Componenets/Footer/Footer.jsx';
import { Outlet } from 'react-router';

function Layout() {
    return ( 
        <>
        <Header />
        <Outlet /> 
        <Footer/>
        </>
     );
}

export default Layout;