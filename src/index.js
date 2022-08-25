import ReactDOM from 'react-dom/client';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatPage, HomePage, ProfilePage } from './components/pages';
import './global.css'
import { MainHeader } from './components/main-header/header';

const theme =
  createTheme({
    palette: {
      primary: {
        main: '#B1C5A0'
      },
      secondary: {
        main: '#fff'
      }
    },
  })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route exact path='/chat/*' element={<ChatPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<h1>404</h1>} />
        {/* <Route path="/nochat" element={<NoChat />} /> */}

      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);




