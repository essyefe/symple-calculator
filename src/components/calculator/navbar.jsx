import React from 'react';

import { Link } from "react-router-dom";

import {Img, BoxLogoNavbar, Navbar } from '../../custom/custom';
import LogoImg from '../../assets/logo-simple-calculator.svg';

function UiNavbar() {
    return (
        <>
            <Navbar>
                <BoxLogoNavbar>
                    <Img src={LogoImg}></Img>
                    <Link to='/' className="logo-link">Symple</Link>
                </BoxLogoNavbar>
                <a className="link-author">By Essyefe</a>
            </Navbar>

        </>
    )
}

export default UiNavbar;