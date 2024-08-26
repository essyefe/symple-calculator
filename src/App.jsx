import React, { useState } from 'react'
import { styled } from '@stitches/react';
import { globalCss } from '../stitches.config';
import Navbar from './components/index/navbar';
import Main from './components/index/main-conteiner';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar />
    <Outlet />
    <Main />
    </>
  )
}

export default App
