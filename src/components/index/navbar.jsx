import React, { useState} from 'react';

import { styled } from '@stitches/react';

import LogoImg from '../../assets/logo-simple-calculator.svg';

const Box = styled('div', {
    display : 'flex',
    width : '100%',
    height: '10vmin',
});

const Img = styled('img', {
    display : 'flex',
    height : '100%',
    marginLeft : '2vmin',
});

function Navbar() {
    return (
        <>
        <Box>
            <Img src={LogoImg}></Img>
        </Box>
        </ >
    )
}

export default Navbar;