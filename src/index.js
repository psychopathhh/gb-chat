import ReactDOM from 'react-dom/client';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material'
import { CurrentChatArea, Layout, ChatList } from './components';
import './global.css'

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
    <Layout currentChatArea={<CurrentChatArea />} chats={<ChatList />} />
  </ThemeProvider>
);




