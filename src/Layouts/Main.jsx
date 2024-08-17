import React from 'react';
import NavbarLarge from '../Components/Navbar/NavbarLarge';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <>
            <NavbarLarge></NavbarLarge>
            <Outlet></Outlet>
        </>
    );
};

export default Main;