import React from 'react';

import { keyframes, styled } from '@stitches/react';
import { Link } from 'react-router-dom';

import '../../style/style.css';

import { Box, Title, Subtitle, BoxButton, LinkAuthor} from '../../custom/custom';


function Main() {
    
    return (
        <>
            <Box>
                <Title>Symple Calculator</Title>
                <Subtitle>Uma calculadora simples para calculos simples.</Subtitle>
                <BoxButton>
                        <Link to='/symple-calculator/calculator' className='link-route'> INICIAR </Link>
                </BoxButton>
                <LinkAuthor href="">By Esysefe</LinkAuthor>
            </Box>
        </>
    )
}


export default Main;