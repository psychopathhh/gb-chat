import ReactDOM from 'react-dom/client';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatPage, HomePage, ProfilePage } from './components/pages';
import './global.css'
import { MainHeader } from './components/main-header/header';
import { CustomThemeProvider } from './theme-context';
import { Provider } from 'react-redux';
import { store, persistor } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <CustomThemeProvider>
        <BrowserRouter>
          <MainHeader />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route exact path='/chat/*' element={<ChatPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </PersistGate>
  </Provider>
);




